import angular from 'angular';
import template from './template.html';

class DeckFormCtrl {
    constructor($scope, uiService, deckService) {
        this.$scope = $scope;
        this.uiService = uiService;
        this.deckService = deckService;

    }

    $onInit() {
        this.deckService.getDecks().then(decks => {
            this.deck = decks[this.$scope.$parent.ctrl.deckIndex];
        });
    }

    updatePreview() {
        this.deckService.updateDeck(this.deckIndex, this.deck);
    }

}

export default angular.module('ksDeckForm', [])
    .controller('DeckFormCtrl', ['$scope', 'uiService', 'deckService', DeckFormCtrl])
    .component('ksDeckForm', {
        template: template,
        controllerAs: 'ctrl',
        controller: 'DeckFormCtrl'
    })
    .name;
