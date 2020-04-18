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
    console.log(cards);
    return (cards || []).reduce((acc, card) => {
      const inCollection = collection.find(elt => elt.cardName === card.name);
      if (!inCollection) {
        acc.push({
          name: card.name,
          owned: 0,
          required: card.amount,
        });
      } else {
        acc.push({
          name: card.name,
          owned: 0,
          required: card.amount,
        });
      }
      return acc;
    }, []);
  }

  private findInCollection(cardName: string, collection: Collectible[]): Collectible {
    return ;
  }
}
