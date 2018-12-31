import angular from 'angular';

class DeckService {
	constructor($q, $http, cardService) {
		this.$q = $q;

		// get('/data/decks.json') -> deck info
		// get('/data/' + deck.file) -> deck content
		// this.decks = [all the deck content]

		let deferred = this.$q.defer();
		this.decks = deferred.promise;
		let promises = [];
		// TODO: handle url depending on deployment
		$http.get('/yawgmoth/data/decks.json').then(decklist => {
			angular.forEach(decklist.data, deckInfo => {
				promises.push($http.get('/yawgmoth/data/' + deckInfo.file).then(deckWithDetail => {
					function groupBy(cards, grouping) {
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

					return groupBy(cardService.getCardsFromText(deckWithDetail.data), 'T').then(cards => {
						return {
							name: deckInfo.name,
								format: deckInfo.format,
							icon: cardService.getCardWithDetail({_type: 'card', name: deckInfo.icon}).image,
							cards: cards
							//cards: cardService.getCardsFromText(deckWithDetail.data)
						}
					});
				}));
			});
			return this.$q.all(promises);
		}).then(decks => {
			//this.decks = decks;
			deferred.resolve(decks);
		});
	}

	getDeck(index) {
		let deferred = this.$q.defer();
		this.getDecks().then(decks => {
			deferred.resolve(decks[index])
		});
		return deferred.promise;
	}

	getDecks() {
		return this.$q.when(this.decks);
	}
}

export default angular.module('deckService', [])
	.service('deckService', ['$q', '$http', 'cardService', DeckService])
	.name;
