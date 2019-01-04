import angular from 'angular';
import template from './template.html';

const SEPARATOR = {_type: 'separator', name: 'sideboard'};

class DeckListCtrl {

	constructor($q, $scope, $stateParams, deckService) {
		this.$q = $q;
		this.$scope = $scope;
		this.deckService = deckService;
		this.deckIndex = $stateParams.deckIndex;
	}

	$onInit() {
		let deckIndex = this.$scope.$parent.ctrl.deckIndex;
		this.deckService.getDeckWithCards(deckIndex).then(deck => {
			this.deck = {
				name: deck.name,
				cards: deck.cards.main.concat([SEPARATOR].concat(deck.cards.sideboard))
			};
			console.log(this.deck);
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
