import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, flatMap, tap, filter } from 'rxjs/operators';
import { Deck, DeckMeta } from '../../model/deck';
import { Card } from '../../model/card';
import { DeckService } from '../../services/deck.service';
import { LoggerService } from 'src/app/services/logger.service';
import { KeyValue } from '@angular/common';

const CARD_TYPE_GROUPES = ['creature', 'planeswalker', 'instant', 'sorcery', 'artifact', 'enchantment', 'land'];

@Component({
  selector: 'ygm-deck',
  templateUrl: './deck.component.html',
})
export class DeckComponent implements OnInit {
  meta$: Observable<DeckMeta>;
  mainboardGrouped$: Observable<Map<string, Card[]>>;
  sideboard$: Observable<Card[]>;

  constructor(
    private log: LoggerService,
    private route: ActivatedRoute,
    private deckService: DeckService) { }

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
      // tap(deck => deck.cards.forEach(card => card.showDetails$ = new Subject<boolean>())),
    );
    this.mainboardGrouped$ = deck$.pipe(
      map(deck => deck.cards.reduce((acc, card) => {
        if (card.sideboard) {
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
      map(deck => deck.cards.filter(c => c.sideboard)),
      // tap(cards => this.log.debug(cards, this)),
    );
  }

  private cardMap(): Map<string, Card[]> {
    return new Map<string, Card[]>();
  }

  groupingOrder = (a: KeyValue<string, Card[]>, b: KeyValue<string, Card[]>): number => {
    const indexOfA = CARD_TYPE_GROUPES.indexOf(a.key);
    const indexOfB = CARD_TYPE_GROUPES.indexOf(b.key);
    return indexOfB > indexOfA ? -1 : (indexOfA > indexOfB ? 1 : 0);
  }

}
