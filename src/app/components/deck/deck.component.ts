import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, flatMap, tap, filter } from 'rxjs/operators';
import { Deck, DeckMeta } from '../../model/deck';
import { Card } from '../../model/card';
import { DeckService } from '../../services/deck.service';
import { LoggerService } from 'src/app/services/logger.service';


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
      flatMap(meta => this.deckService.getDeckById(meta.id))
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
      }, new Map<string, Card[]>()))
    );
    this.sideboard$ = deck$.pipe(
      map(deck => deck.cards.filter(c => c.sideboard)),
      //filter(cards => cards.filter(c => c.sideboard)),
      tap(cards => this.log.debug(cards)),
    );
  }

}
