import angular from "angular";
import template from './template.html';

let routing = ($stateProvider) => {
    $stateProvider
        .state('editor', {
            parent: 'base',
            url: '/editor/:deckIndex',
            controller: 'EditorCtrl',
            controllerAs: 'ctrl',
            template: template
        });
};

class EditorCtrl {
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


export default angular.module('ksEditor', [])
    .config(routing)
    .controller('EditorCtrl', ['$stateParams', 'deckService', EditorCtrl])
    .name;