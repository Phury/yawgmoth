import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { DeckMeta } from '../../model/deck';
import { Card } from '../../model/card';
import { DeckService } from '../../services/deck.service';
import { LoggerService } from 'src/app/services/logger.service';
import { KeyValue } from '@angular/common';
import { GrowlService } from 'src/app/services/growl.service';

const CARD_TYPE_GROUPES = ['creature', 'planeswalker', 'instant', 'sorcery', 'artifact', 'enchantment', 'land'];

interface DeleteAction {
	name: string;
	confirmName?: string;
	show?: boolean;
}

@Component({
	selector: 'ygm-deck',
	templateUrl: './deck.component.html',
})
export class DeckComponent implements OnInit {
	meta$: Observable<DeckMeta>;
	mainboardGrouped$: Observable<Map<string, Card[]>>;
	sideboard$: Observable<Card[]>;
	deleteAction: DeleteAction;


	constructor(
		private log: LoggerService,
		private deckService: DeckService,
		private growl: GrowlService,
		private route: ActivatedRoute,
		private router: Router) { }

	ngOnInit(): void {
		/*
		TODO: get meta from state first
		this.meta$ = this.route.paramMap.pipe(
			map(() => window.history.state),
			catchError(error => {
				const deckId = this.route.parent.snapshot.url[1].path;
				return this.deckService.getOne(deckId);
			})
		);
		*/
		const deckId = this.route.parent.snapshot.url[1].path;
		this.meta$ = this.deckService.findMetadataById(deckId);
		const deck$ = this.meta$.pipe(
			flatMap(meta => this.deckService.getDeckById(meta.id)),
		);
		this.mainboardGrouped$ = deck$.pipe(
			map(deck => deck.cards.reduce((acc, card) => {
				if (card.board === 'sideboard') {
					// skip
				} else if (acc.has(card.types[0])) {
					acc.get(card.types[0]).push(card);
				} else {
					acc.set(card.types[0], [card]);
				}
				return acc;
			}, this.cardMap()))
		);
		this.sideboard$ = deck$.pipe(
			map(deck => deck.cards.filter(c => c.board === 'sideboard')),
		);
		// TODO: unsubscribe
		this.meta$.subscribe(meta => this.deleteAction = { name: meta.name });
	}

	private cardMap(): Map<string, Card[]> {
		return new Map<string, Card[]>();
	}
	
	onDelete(): void {
		this.deleteAction.show = true;
	}
	
	onDeleteConfirm(): void {
		if (this.deleteAction.name === this.deleteAction.confirmName) {
			this.deckService.deleteByName(this.deleteAction.name);
			this.growl.notify({message: `deck '${this.deleteAction.name}' deleted!`, type: 'success' });
			this.router.navigate(['/wishlist']);
		}
	}
	
	onDeleteCancel(): void {
		this.deleteAction.show = false;
	}

	groupingOrder = (a: KeyValue<string, Card[]>, b: KeyValue<string, Card[]>): number => {
		const indexOfA = CARD_TYPE_GROUPES.indexOf(a.key);
		const indexOfB = CARD_TYPE_GROUPES.indexOf(b.key);
		return indexOfB > indexOfA ? -1 : (indexOfA > indexOfB ? 1 : 0);
	}

}
