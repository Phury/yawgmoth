import angular from 'angular';
import template from './template.html';

class DeckList2Ctrl {
	constructor($scope, uiService, deckService) {
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
		});
	}
}

export default angular.module('ksDeckList2', [])
	.controller('DeckList2Ctrl', ['$scope', 'uiService', 'deckService', DeckList2Ctrl])
	.component('ksDeckList2', {
		template: template,
		controllerAs: 'ctrl',
		controller: 'DeckList2Ctrl'
	})
	.name;
