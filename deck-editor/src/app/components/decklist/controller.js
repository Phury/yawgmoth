import angular from 'angular';
import template from './template.html';

class DeckListCtrl {
  constructor($scope, deckService, cardService) {
    this.$scope = $scope;
    this.deckService = deckService;
    this.cardService = cardService;
  }

  $onInit() {
    this.deckService.getDecks().then(decks => {
      let deck = decks[0];
      this.cardService.getCardsFromText(deck.cards).then(cards => {
        this.deck = {name: deck.name, cards: cards};
      });
    });
  }
}

export default angular.module('ksDeckList', [])
  .controller('DeckListCtrl', ['$scope', 'deckService', 'cardService', DeckListCtrl])
  .component('ksDeckList', {
    template: template,
    controllerAs: 'ctrl',
    controller: 'DeckListCtrl'
  })
  .name;
