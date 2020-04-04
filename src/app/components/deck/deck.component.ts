import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { map, flatMap, tap, catchError } from 'rxjs/operators';
import { Deck, DeckMeta } from '../../model/deck';
import { Card } from '../../model/card';
import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'ygm-deck',
  templateUrl: './deck.component.html',
})
export class DeckComponent implements OnInit {
  meta$: Observable<DeckMeta>;
  deck$: Observable<Deck>;
  selectedCard$: Subject<Card>;
  filters: {showContent:boolean};

  constructor(
    public route: ActivatedRoute,
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
    this.deck$ = this.meta$.pipe(
      flatMap(meta => this.deckService.getDeckById(meta.id))
    );
    this.selectedCard$ = new Subject<any>();
    this.deck$.pipe(
      map((deck: Deck) => deck.cards[0]),
      tap(card => this.selectedCard$.next(card))
    );
    this.filters = { showContent: true };
  }

  toggleContent(section: {showContent:boolean}) {
    section.showContent = !section.showContent;
  }

}
