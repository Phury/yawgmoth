import { Component, OnInit } from '@angular/core';
import { DeckService } from 'src/app/services/deck.service';
import { Observable, combineLatest, Subject, zip } from 'rxjs';
import { map, tap, flatMap } from 'rxjs/operators';
import { Card } from 'src/app/model/card';
import { CompareService, Diff } from 'src/app/services/compare.service';
import { CollectionService } from 'src/app/services/collection.service';
import { Item } from 'src/app/core/item';
import { ActivatedRoute } from '@angular/router';

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
    private compareService: CompareService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sources$ = combineLatest([
      this.deckService.listAllDecks(),
      this.deckService.listAllWishDecks(),
    ]).pipe(
      map(([owned, wished]) => owned.concat(wished)),
      // tap(decks => console.log(decks)),
      map(decks => decks.map(deck => ({ value: deck.id, label: deck.id.split('_').join('/') }))),
    );
    this.source$ = this.selectedSource$.pipe(
      map(next => this.deckService.getDeckById(next)),
      flatMap(deck$ => deck$.pipe(
        map(deck => deck.cards.concat(deck.sideboard)),
        map(cards => cards.filter(card => card != null)),
      )),
    );
    this.difference$ = combineLatest([
      this.source$,
      this.collectionService.getCollection()
    ]).pipe(
      map(([cards, collection]) => this.compareService.diff(cards, collection)),
    );

    const deckId = this.route.parent.snapshot.url[1].path;
    if (deckId) {
      console.log(deckId);
      this.selectedSource$.next(deckId);
    }
  }

}
