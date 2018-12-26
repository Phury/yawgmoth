
export const cardListComponent = {
  template: require('./cardList.html'),
  controllerAs: 'ctrl',
  controller: class CardListCtrl {
    constructor(deckService) {
      console.log('card list loaded');

      this.deck = deckService.getDeckById(0);
    }
  }
};
