import angular from 'angular';
import yaml from 'js-yaml';

class DeckService {
	constructor($q, $http, cardService) {
		this.$q = $q;

		let deferred = this.$q.defer();
		this.decks = deferred.promise;

		// get('/data/decks.json') -> deck info
		// get('/data/' + deck.file) -> deck content
		// this.decks = [all the deck content]

		let promises = [];
		$http.get('/data/decks.yml').then(yamlIndex => {
			let index = yaml.safeLoad(yamlIndex.data);
			angular.forEach(index.files, indexFile => {
				promises.push($http.get('/data/' + indexFile).then(yamlFile => {

					let deck = yaml.safeLoad(yamlFile.data);
					let icon = cardService.getCardWithDetail({_type: 'card', name: deck.meta.icon});

					// TODO: lazy load cards
					let mainDeck = cardService.getCardListWithDetail(deck.cards.main);
					let sideboardDeck = cardService.getCardListWithDetail(deck.cards.sideboard);

					return icon.then(icon => {
						return {
							icon: icon.image,
							name: deck.meta.name,
							format: deck.meta.format,
							cards: {
								main: mainDeck,
								sideboard: sideboardDeck
							}
						};
					});
				}));
			});
			return this.$q.all(promises);
		}).then(decks => {
			deferred.resolve(decks);
		});
	}

	getDeck(index) {
		return this.getDecks()
			.then(decks => decks[index])
			.then(deck => {
				return this.$q.all(deck.cards.main.concat(deck.cards.sideboard)).then(cards => {
					return {
						icon: deck.icon,
						name: deck.name,
						format: deck.format,
						cards: {
							main: cards.slice(0, deck.cards.main.length),
							sideboard: cards.slice(deck.cards.main.length)
						}
					};
				});
			});
	}

	getDecks() {
		return this.$q.when(this.decks);
	}

	textToDeck(text) {
		let deck = {
			name: "",
			icon: "",
			format: "",
			cards: []
		};
		let sections = ['none', 'meta', 'cards', 'other'];
		let currentSection = 0;

		text.split('\n').map(deckLine => {
			let sanitized = deckLine.trim();
			if (sanitized.indexOf('#') == 0) {
				currentSection++;
			} else {
				switch (sections[currentSection]) {
					case 'meta':
						if (sanitized.indexOf('icon: ') == 0) {
							let icon = sanitized.substring(sanitized.indexOf('icon: ')+1, sanitized.length);
							deck.icon = this.cardService.getCardWithDetail({_type: 'card', name: icon}).image
						} else if (sanitized.indexOf('name: ') == 0) {
							deck.name = sanitized.substring(sanitized.indexOf('name: ')+1, sanitized.length);
						} else  if (sanitized.indexOf('format: ') == 0) {
							deck.format = sanitized.substring(sanitized.indexOf('format: ')+1, sanitized.length);
						}
						break;
					case 'cards':
						deck.cards.push(deckLine);
						/*
						this.groupBy(this.cardService.getCardsFromText(deckWithMeta.data), 'T').then(cards => {
							deck.cards = cards;
						});
						*/
						break;
				}
			}
		});

		console.log(deck);
		return deck;
	}

	groupBy(cards, grouping) {
		switch (grouping) {
			case 'TYPE':
				return cards.then(cards => {
					return {
						lands: cards.filter(card => card.type && card.type.indexOf("Land") !== -1),
						creatures: cards.filter(card => card.type && card.type.indexOf("Creature") !== -1),
						instants: cards.filter(card => card.type && card.type.indexOf("Instant") !== -1),
						sorceries: cards.filter(card => card.type && card.type.indexOf("Sorcery") !== -1),
						artifacts: cards.filter(card => card.type && card.type.indexOf("Artifact") !== -1 && !card.type.indexOf("Creature") !== -1)
					};
				});
			default:
				let grouping = {
					main: []
				};
				let group = 'main';
				return cards.then(cards => {
					angular.forEach(cards, card => {
						if (card._type !== 'card') {
							group = card.name;
							grouping[group] = [];
						} else {
							grouping[group].push(card);
						}
					});
					return grouping;
				});
		}
	}

}

export default angular.module('deckService', [])
	.service('deckService', ['$q', '$http', 'cardService', DeckService])
	.name;
