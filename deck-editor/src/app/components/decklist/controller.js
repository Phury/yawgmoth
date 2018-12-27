import angular from 'angular';
import template from './template.html';

class DeckListCtrl {
	constructor($scope, $stateParams, deckService, cardService) {
		this.$scope = $scope;
		this.deckService = deckService;
		this.cardService = cardService;
		this.deckIndex = $stateParams.deckIndex;
	}

	$onInit() {
		this.deckService.getDecks().then(decks => {
			let deck = decks[this.deckIndex];
			this.cardService.getCardsFromText(deck.cards).then(cards => {
				this.deck = {name: deck.name, cards: cards};
			});
		});
	}
}

export default angular.module('ksDeckList', [])
	.controller('DeckListCtrl', ['$scope', '$stateParams', 'deckService', 'cardService', DeckListCtrl])
	.component('ksDeckList', {
		template: template,
		controllerAs: 'ctrl',
		controller: 'DeckListCtrl'
	})
	.name;
