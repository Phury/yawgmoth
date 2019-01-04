import angular from 'angular';
import template from './template.html';

class DeckList2Ctrl {
	constructor($q, $scope, uiService, deckService, cardService, cardFilter) {
		this.$q = $q;
		this.$scope = $scope;
		this.uiService = uiService;
		this.deckService = deckService;
		this.cardService = cardService;
		this.cardFilter = cardFilter;
	}

	$onInit() {
		let deckIndex = this.$scope.$parent.ctrl.deckIndex;
		this.deckService.getDeckWithCards(deckIndex).then(deck => {
			this.deck = deck;
			this.deck.cards.main = this.cardFilter.groupBy(this.deck.cards.main, 'TYPE');
			this.deck.cards.sideboard = this.cardFilter.groupBy(this.deck.cards.sideboard);
			this.selectedBoard = 'main';
			this.uiService.accordion();
			this.uiService.tabs();

		});
	}
}

export default angular.module('ksDeckList2', [])
	.controller('DeckList2Ctrl', ['$q', '$scope', 'uiService', 'deckService', 'cardService', 'cardFilter', DeckList2Ctrl])
	.component('ksDeckList2', {
		template: template,
		controllerAs: 'ctrl',
		controller: 'DeckList2Ctrl'
	})
	.name;
