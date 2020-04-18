import { Component, OnInit } from '@angular/core';
import { DeckService } from 'src/app/services/deck.service';
import { Observable, combineLatest, Subject } from 'rxjs';
import { map, tap, flatMap } from 'rxjs/operators';
import { Card } from 'src/app/model/card';
import { CompareService, Diff } from 'src/app/services/compare.service';
import { CollectionService } from 'src/app/services/collection.service';
import { Item } from 'src/app/core/item';

@Component({
  selector: 'ygm-compare',
  templateUrl: './compare.component.html',
})
export class CompareComponent implements OnInit {

  sources$: Observable<Item[]>;
  source$: Observable<Card[]>;
  difference$: Observable<Diff[]>;
  selectedSource$ = new Subject<string>();

  constructor(
    private deckService: DeckService,
    private collectionService: CollectionService,
    private compareService: CompareService) { }

  ngOnInit(): void {
    this.sources$ = this.deckService.listAllDecks().pipe(
      map(decks => decks.map(deck => deck.id)),
      map(deckIds => deckIds.map(deckId => ({ value: deckId, label: deckId.split('_').join('/') }))),
    );
    this.source$ = this.selectedSource$.pipe(
      map(next => this.deckService.getDeckById(next)),
      flatMap(deck$ => deck$.pipe(
        map(deck => deck.cards.concat(deck.sideboard)),
        map(cards => cards.filter(card => card != null)),
      )),
    );
    this.difference$ = combineLatest([this.source$, this.collectionService.getCollection()]).pipe(
      map(([cards, collection]) => this.compareService.diff(cards, collection)),
    );
  }

}
