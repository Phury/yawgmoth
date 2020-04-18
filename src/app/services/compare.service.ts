import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { Collectible } from '../model/collectible';

export interface Diff {
  name?: string;
  owned?: number;
  required?: number;
}

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  constructor() { }

  diff(cards: Card[], collection: Collectible[]): Diff[] {
    // console.log(cards);
    return (cards || []).reduce((acc, card) => {
      const inCollection = this.findAllMatchingCards(card.name, collection);
      // console.log(inCollection);
      if (!inCollection) {
        acc.push({
          name: card.name,
          owned: 0,
          required: card.amount,
        });
      } else {
        acc.push({
          name: card.name,
          owned: inCollection.quantity,
          required: card.amount,
        });
      }
      return acc;
    }, []);
  }

  private findAllMatchingCards(cardName: string, collection: Collectible[]): {name: string, quantity: number} {
    return collection
        .filter(elt => elt.cardName === cardName)
        .reduce((withAmount: {name: string, quantity: number}, item: Collectible) => {
          withAmount.quantity += item.quantity;
          return withAmount;
        }, {name: cardName, quantity: 0});
  }
}
