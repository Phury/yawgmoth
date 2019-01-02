import angular from 'angular';
import template from './template.html';

class DeckListCtrl {
	constructor($q, $scope, $stateParams, deckService) {
		this.$q = $q;
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
	.controller('DeckListCtrl', ['$q', '$scope', '$stateParams', 'deckService', DeckListCtrl])
	.component('ksDeckList', {
		template: template,
		controllerAs: 'ctrl',
		controller: 'DeckListCtrl'
	})
	.name;
