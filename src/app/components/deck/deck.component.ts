import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Deck, DeckMeta } from '../../model/deck';
import { Card } from '../../model/card';
import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'ygm-deck',
  templateUrl: './deck.component.html',
})
export class DeckComponent implements OnInit {
  @Input() meta: DeckMeta;
  deck$: Observable<Deck>;
  selectedCard$: Subject<Card>;

  constructor(private deckService: DeckService) { }

  ngOnInit(): void {
    this.deck$ = this.deckService.getOne(this.meta.id);
    this.selectedCard$ = new Subject<any>();
    this.deck$.pipe(
      map((deck: Deck) => deck.cards[0]),
      tap(card => this.selectedCard$.next(card))
    );
  }

}
