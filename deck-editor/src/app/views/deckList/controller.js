import angular from "angular";
import template from './template.html';
import deckService from "../../services/deckService";

let routing = ($stateProvider) => {
	$stateProvider
		.state('decks', {
			parent: 'base',
			url: '/decks',
			controller: 'DecksCtrl',
			controllerAs: 'ctrl',
			template: template
		});
};

class DecksCtrl {
	constructor($scope, deckService, cardService) {
		this.$scope = $scope;
		this.deckService = deckService;
		this.cardService = cardService;
	}

	$onInit() {
		this.deckService.getDecks().then(decks => {
			this.decks = decks;
			console.log(this.decks);
		});
	}
}


export default angular.module('ksDecks', [])
	.config(routing)
	.controller('DecksCtrl', ['$scope', 'deckService', 'cardService', DecksCtrl])
	.name;