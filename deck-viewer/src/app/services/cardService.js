import angular from 'angular';

export default class DeckService {
  constructor($http) {
    console.log('deck service loaded');
  }

  findCardByName(name) {
    return $http.get('https://api.magicthegathering.io/v1/cards?name="'+name+'"')
      .success((data) => {
        return data.cards[0];
      })
      .error((error) => {
        throw error;
      });
  }
}

