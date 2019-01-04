import angular from 'angular';
import yaml from 'js-yaml';

class DeckService {
	constructor($q, $http, cardService) {
		this.$q = $q;
		this.cardService = cardService;

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
					return this.cardService.getCardWithDetail({_type: 'card', name: deck.meta.icon}).then(icon => {
						let deckWithIcon = {
							name: deck.meta.name,
							format: deck.meta.format,
							icon: icon.image,
							cards: {
								main: deck.cards.main,
								sideboard: deck.cards.sideboard
							}
						};
						return deckWithIcon;
					});
				}));
			});
			return this.$q.all(acc);
		}).then(decks => {
			deferred.resolve(decks);
		});
	}

	getDeckWithCards(index) {
		return this.getDeck(index).then(deck => {
			let acc = [];
			acc = acc.concat(this.cardService.getCardListWithDetail(deck.cards.main));
			acc = acc.concat(this.cardService.getCardListWithDetail(deck.cards.sideboard));
			return this.$q.all(acc).then(cards => {
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

	getDeck(index) {
		return this.getDecks().then(decks => decks[index]);
	}

	getDecks() {
		return this.$q.when(this.decks);
	}
}

export default angular.module('deckService', [])
	.service('deckService', ['$q', '$http', 'cardService', DeckService])
	.name;
