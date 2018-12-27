import angular from 'angular';

class DeckService {
	constructor($q, $http) {
		this.$q = $q;

		// get('/data/decks.json') -> deck info
		// get('/data/' + deck.file) -> deck content
		// this.decks = [all the deck content]

		let deferred = this.$q.defer();
		this.decks = deferred.promise;
		let promises = [];
		// TODO: handle url depending on deployment
		$http.get('/data/decks.json').then(decklist => {
			angular.forEach(decklist.data, deckInfo => {
				promises.push($http.get('/data/' + deckInfo.file).then(deckWithDetail => {
					return {
						name: deckInfo.name,
						format: deckInfo.format,
						cards: deckWithDetail.data
					};
				}));
			});
			return this.$q.all(promises);
		}).then(decks => {
			this.decks = decks;
			deferred.resolve(decks);
		});
	}

	getDecks() {
		return this.$q.when(this.decks);
	}

	updateDeck(index, deck) {
		this.decks[index] = deck;
		console.log(this.decks);
	}
}

export default angular.module('deckService', [])
	.service('deckService', ['$q', '$http', DeckService])
	.name;
