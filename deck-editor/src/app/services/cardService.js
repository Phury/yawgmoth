import angular from 'angular';

class CardService {
	constructor($q, Restangular) {
		this.$q = $q;
		this.restangular = Restangular;
	}

	getCardsFromText(text) {
		let cards = this.textToCards(text);
		return this.getCardsWithDetail(cards);
	}

	getCardsWithDetail(cards) {
		let promises = cards
			.filter(card => card.quantity !== 0)
			.map(this.getCardWithDetail.bind(this));
		return this.$q.all(promises);
	}

	sanitizeCardName(cardName) {
		let sanitized = ((cardName.indexOf('\/\/') === -1) ? cardName : cardName.split('\/\/')[0]).trim(); // Handle split cards
		return sanitized.replace(new RegExp('’', 'g'), '\'');
	}

	getCardWithDetail(card) {
		let cardName = this.sanitizeCardName(card.name);
		let cardFromCache = this.getOrDownloadCard(cardName);
		cardFromCache.quantity = card.quantity;
		return cardFromCache;
	}

	getOrDownloadCard(cardName) {
		if (!sessionStorage.getItem(cardName)) {
			return this.restangular.all('cards').customGET('', { name: "\""+cardName+"\"" }).then(searchResult => {
				let cardWithDetail = searchResult.cards.find(card => { return card != null && card.imageUrl != null; });
				return cardWithDetail == null ? { name: cardName } : cardWithDetail;
			}).then(cardWithDetail => {
				sessionStorage.setItem(cardName, JSON.stringify({
					name: cardName,
					image: cardWithDetail.imageUrl,
					manaCost: cardWithDetail.manaCost,
					manaCostClasses: this.getManaCostClasses(cardWithDetail.manaCost),
					originalText: cardWithDetail.originalText,
					originalType: cardWithDetail.originalType,
					rarity: cardWithDetail.rarity,
					type: cardWithDetail.type,
					set: cardWithDetail.set,
					setName: cardWithDetail.setName,
					text: cardWithDetail.text,
					flavor: cardWithDetail.flavor,
					power: cardWithDetail.power,
					toughness: cardWithDetail.toughness
				}));
				return JSON.parse(sessionStorage.getItem(cardName));
			});
		} else {
			return JSON.parse(sessionStorage.getItem(cardName));
		}
	}

	getManaCostClasses(mc) {
		return mc == null ? [] : mc.split(/{(.*?)}/)
			.filter(str => { return str.trim() != ""; })
			.map(elt => { return 'ms-' + elt.toLowerCase().replace('/', '') });
	}

	cardsToText(cards) {
		return cards.map(card => {
			return card.quantity + ' ' + card.name;
		}).join('\n');
	}

	textToCards(text) {
		return text.split('\n').map(cardLine => {
			let firstSpace = cardLine.indexOf(' ');
			return {
				quantity: (firstSpace == -1) ? 0 :  cardLine.substring(0, firstSpace),
				name: (firstSpace == -1) ? cardLine : cardLine.substring(firstSpace+1, cardLine.length)
			}
		});
	}
}

export default angular.module('cardService', [])
	.service('cardService', ['$q', 'Restangular', CardService])
	.name;
