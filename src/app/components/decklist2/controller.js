import angular from 'angular';
import template from './template.html';

class DeckList2Ctrl {
    constructor($scope, uiService, deckService, cardService) {
        this.$scope = $scope;
        this.uiService = uiService;
        this.deckService = deckService;
        this.cardService = cardService;
    }

    $onInit() {
        this.deckService.getDecks().then(decks => {
            let deck = decks[this.$scope.$parent.ctrl.deckIndex];
            this.deck = { name: deck.name };
            this.cardService.getCardsFromText(deck.cards).then(cards => {
                this.deck = { name: deck.name, cards: cards };
                this.uiService.accordion();
            });
        });
    }
}

export default angular.module('ksDeckList2', [])
    .controller('DeckList2Ctrl', ['$scope', 'uiService', 'deckService', 'cardService', DeckList2Ctrl])
    .component('ksDeckList2', {
        template: template,
        controllerAs: 'ctrl',
        controller: 'DeckList2Ctrl'
    })
    .name;
