import angular from 'angular';

class CardService {
	constructor($q, Restangular) {
		this.$q = $q;
		this.restangular = Restangular;
	}

	getCardsFromText(text) {
		return this.getCardsWithDetail(this.textToCards(text));
	}

	getCardsWithDetail(cards) {
		return this.$q.all(cards
			.filter(card => card.quantity !== 0)
			.map(this.getCardWithDetail.bind(this)));
	}

	sanitizeCardName(cardName) {
		let sanitized = ((cardName.indexOf('\/\/') === -1) ? cardName : cardName.split('\/\/')[0]).trim(); // Handle split cards
		return sanitized.replace(new RegExp('’', 'g'), '\'');
	}

	getCardWithDetail(card) {
		if (card._type === 'card' && card.quantity !== 0) {
			let cardName = this.sanitizeCardName(card.name);
			let cardFromCache = this.getOrDownloadCard(cardName);
			cardFromCache.quantity = card.quantity;// TODO: quantity is a feature of decks and does not belong here
			return cardFromCache;
		} else {
			return card;
		}
	}

	getOrDownloadCard(cardName) {
		if (!sessionStorage.getItem(cardName)) {
			return this.restangular.all('cards').customGET('', {
				name: "\""+cardName+"\""
			}).then(searchResult => {
				let cardWithDetail = searchResult.cards.find(card => { return card != null && card.imageUrl != null; });
				return cardWithDetail == null ? { name: cardName } : cardWithDetail;
			}).then(cardWithDetail => {
				sessionStorage.setItem(cardName, JSON.stringify({
					_type: 'card',
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
			let sanitized = cardLine.trim();
			let firstSpace = sanitized.indexOf(' ');
			if (sanitized.indexOf('#') == 0) {
				return {
					_type: "separator",
					name: sanitized.substring(1, sanitized.length)
				}
			} else {
				return {
					_type: "card",
					quantity: (firstSpace == -1) ? 0 :  sanitized.substring(0, firstSpace),
					name: (firstSpace == -1) ? sanitized : sanitized.substring(firstSpace+1, sanitized.length)
				}
			}
		});
	}
}

export default angular.module('cardService', [])
	.service('cardService', ['$q', 'Restangular', CardService])
	.name;
