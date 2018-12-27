import angular from "angular";
import template from './template.html';

let routing = ($stateProvider) => {
	$stateProvider
		.state('editor', {
			parent: 'base',
			url: '/decks/:deckIndex',
			controller: 'DeckDetailCtrl',
			controllerAs: 'ctrl',
			template: template
		});
};

class DeckDetailCtrl {
	constructor($stateParams, deckService) {
		this.deckService = deckService;
		this.deckIndex = $stateParams.deckIndex;
	}

	$onInit() {
		this.deckService.getDecks().then(decks => {
			this.deck = decks[this.deckIndex];
		});
	}

	updatePreview() {
		this.deckService.updateDeck(this.deckIndex, this.deck);
	}
}


export default angular.module('ksDeckDetail', [])
	.config(routing)
	.controller('DeckDetailCtrl', ['$stateParams', 'deckService', DeckDetailCtrl])
	.name;