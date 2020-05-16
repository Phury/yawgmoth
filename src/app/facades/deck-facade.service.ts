import { Injectable } from '@angular/core';
import { DeckView } from '../model/deck';
import { DeckService } from '../services/deck.service';
import { flatMap, map } from 'rxjs/operators';
import { Card } from '../model/card';

@Injectable({
	providedIn: 'root'
})
export class DeckFacade {
	
	constructor(
		private deckService: DeckService) {}
	
	load(deckId: string): DeckView {
		const meta$ = this.deckService.findMetadataById(deckId);
		const deck$ = meta$.pipe(
			flatMap(meta => this.deckService.getDeckById(meta.id)),
		);
		const mainboardGrouped$ = deck$.pipe(
			map(deck => deck.cards.reduce((acc, card) => {
				if (card.board === 'sideboard') {
					// skip
				} else if (acc.has(card.types[0])) {
					acc.get(card.types[0]).push(card);
				} else {
					acc.set(card.types[0], [card]);
				}
				return acc;
			}, new Map<string, Card[]>()))
		);
		const sideboard$ = deck$.pipe(
			map(deck => deck.cards.filter(c => c.board === 'sideboard')),
		);
		return { meta$, mainboardGrouped$, sideboard$ };
	}

}
