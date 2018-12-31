import angular from 'angular';
import template from './template.html';

class DeckListCtrl {
	constructor($scope, $stateParams, deckService) {
		this.$scope = $scope;
		this.deckService = deckService;
		this.deckIndex = $stateParams.deckIndex;
	}

	$onInit() {
		this.deckService.getDeck(this.deckIndex).then(deck => {
			this.deck = deck;
		});
	}
}

export default angular.module('ksDeckList', [])
	.controller('DeckListCtrl', ['$scope', '$stateParams', 'deckService', DeckListCtrl])
	.component('ksDeckList', {
		template: template,
		controllerAs: 'ctrl',
		controller: 'DeckListCtrl'
	})
	.name;
