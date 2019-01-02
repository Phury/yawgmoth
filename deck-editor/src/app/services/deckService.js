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

		let acc = [];
		$http.get('/data/decks.yml').then(yamlIndex => {
			let index = yaml.safeLoad(yamlIndex.data);
			angular.forEach(index.files, indexFile => {
				acc.push($http.get('/data/' + indexFile).then(yamlFile => {

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
			return this.$q.all(acc);
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

	groupBy(cards, grouping) {
		switch (grouping) {
			case 'TYPE':
				return {
					creatures: cards.filter(card => card.type && card.type.indexOf("Creature") !== -1),
					instants: cards.filter(card => card.type && card.type.indexOf("Instant") !== -1),
					sorceries: cards.filter(card => card.type && card.type.indexOf("Sorcery") !== -1),
					artifacts: cards.filter(card => card.type && card.type.indexOf("Artifact") !== -1 && !card.type.indexOf("Creature") !== -1),
					lands: cards.filter(card => card.type && card.type.indexOf("Land") !== -1)
				};
			default:
				return cards;
		}
	}

}

export default angular.module('deckService', [])
	.service('deckService', ['$q', '$http', 'cardService', DeckService])
	.name;
