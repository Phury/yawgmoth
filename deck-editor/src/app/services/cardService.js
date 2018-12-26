import angular from 'angular';

class CardService {
	constructor($q, Restangular) {
		this.$q = $q;
		this.restangular = Restangular;
	}

	getCardsFromText(text) {
		let cards = this.textToCards(text);
		console.log(cards);
		return this.getCardsWithDetail(cards);
	}

	getCardsWithDetail(cards) {
		//let deferred = this.$q.defer();
		let promises = cards
			.filter(card => card.quantity != 0)
			.map(this.mapToCardWithDetail.bind(this));
		return this.$q.all(promises);
	}

	sanitizeCardName(cardName) {
		let sanitized = ((cardName.indexOf('\/\/') == -1) ? cardName : cardName.split('\/\/')[0]).trim(); // Handle split cards
		return sanitized.replace(new RegExp('’', 'g'), '\'');
	}

	mapToCardWithDetail(card) {
		let cardName = this.sanitizeCardName(card.name);
		let cardFromCache = this.getOrDownloadCard(cardName);
		cardFromCache.quantity = card.quantity;
		return cardFromCache;
	}

	getOrDownloadCard(cardName) {
		if (!sessionStorage.getItem(cardName)) {
			return this.restangular.all('cards').customGET('', { name: "\""+cardName+"\"" }).then(searchResult => {
				let cardWithDetail = searchResult.cards.find(card => { return card != null && card.imageUrl != null; });
				return cardWithDetail == null ? { name: card.name } : cardWithDetail;
			}).then(cardWithDetail => {
				sessionStorage.setItem(cardName, JSON.stringify({
					name: cardName,
					image: cardWithDetail.imageUrl,
					manaCost: cardWithDetail.manaCost,
					manaCostClasses: this.getManaCostClasses(cardWithDetail.manaCost)
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

	getExampleDeck() {
		return {
			name: "Mono-black Control",
			cards: this.getExampleCards()
		}
	}

	getExampleCards() {
		return [
			{
				name: "Azor, the Lawbringer",
				image: "https://img.scryfall.com/cards/large/en/rix/154.jpg?1524752117",
				quantity: 1
			},
			{
				name: "Muldrotha, the Gravetide",
				image: "https://img.scryfall.com/cards/large/en/dom/199.jpg?1534549734",
				quantity: 2
			},
			{
				name: "Tatyova, Benthic Druid",
				image: "https://img.scryfall.com/cards/large/en/dom/206.jpg?1524792075",
				quantity: 3
			},
			{
				name: "Raff Capashen, Ship's Mage",
				image: "https://img.scryfall.com/cards/large/en/dom/202.jpg?1524792034",
				quantity: 4
			},
			{
				name: "Jodah, Archmage Eternal",
				image: "https://img.scryfall.com/cards/large/en/dom/198.jpg?1524791992",
				quantity: 5
			},
			{
				name: "Flower // Flourish",
				image: "https://img.scryfall.com/cards/large/front/f/e/feb4b39f-d309-49ba-b427-240b7fdc1099.jpg?1539735483",
				quantity: 2,
				split: true
			}
		]
	}
}

export default angular.module('cardService', [])
	.service('cardService', ['$q', 'Restangular', CardService])
	.name;
