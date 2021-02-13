import { Injectable } from '@angular/core';
import { Card } from '../model/card';
import { Collectible, CardWithAmout } from '../model/collectible';

export interface Diff {
	name?: string;
	cardRef?: Card;
	owned?: number;
	required?: number;
}

@Injectable({
	providedIn: 'root'
})
export class CompareService {

	constructor() { }

	diff(cards: Card[], collection: Collectible[]): Diff[] {
		return (cards || []).reduce((acc, card) => {
			const cardWithAmout = this.findAllMatchingCards(card.name, collection);
			if (!cardWithAmout) {
				acc.push({
					name: card.name,
					cardRef: card,
					owned: 0,
					required: card.amount,
				});
			} else {
				acc.push({
					name: card.name,
					cardRef: card,
					owned: cardWithAmout.quantity,
					required: card.amount,
				});
			}
			return acc;
		}, []);
	}

	private findAllMatchingCards(cardName: string, collection: Collectible[]): CardWithAmout {
		return collection
				.filter(elt => elt.cardName === cardName)
				.reduce((ctbl: CardWithAmout, item: Collectible) => {
					ctbl.quantity = Number(ctbl.quantity) + Number(item.quantity);
					return ctbl;
				}, {name: cardName, quantity: 0});
	}
}
