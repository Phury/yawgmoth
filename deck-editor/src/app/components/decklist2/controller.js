import angular from 'angular';
import template from './template.html';

class DeckList2Ctrl {
	constructor($q, $scope, uiService, deckService) {
		this.$q = $q;
		this.$scope = $scope;
		this.uiService = uiService;
		this.deckService = deckService;
	}

	$onInit() {
		this.deckIndex = this.$scope.$parent.ctrl.deckIndex;
		this.deckService.getDeck(this.deckIndex).then(deck => {
			this.deck = deck;
			this.selectedBoard = 'main';
			this.uiService.accordion();
			this.uiService.tabs();

			this.deck.cards.main = this.deckService.groupBy(this.deck.cards.main, 'TYPE');

			console.log(this.deck);
		});
	}
}

export default angular.module('ksDeckList2', [])
	.controller('DeckList2Ctrl', ['$q', '$scope', 'uiService', 'deckService', DeckList2Ctrl])
	.component('ksDeckList2', {
		template: template,
		controllerAs: 'ctrl',
		controller: 'DeckList2Ctrl'
	})
	.name;
