import { Component, OnInit } from '@angular/core';
import { DeckService } from 'src/app/services/deck.service';
import { Observable, combineLatest, Subject, zip, BehaviorSubject } from 'rxjs';
import { map, tap, flatMap, defaultIfEmpty } from 'rxjs/operators';
import { Card } from 'src/app/model/card';
import { CompareService, Diff } from 'src/app/services/compare.service';
import { CollectionService } from 'src/app/services/collection.service';
import { Item } from 'src/app/core/item';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ygm-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})
export class CompareComponent implements OnInit {

  sources$: Observable<Item[]>;
  source$: Observable<Card[]>;
  difference$: Observable<Diff[]>;
  selectedSource$: Subject<string>;

  constructor(
    private deckService: DeckService,
    private collectionService: CollectionService,
    private compareService: CompareService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const deckId = this.route.parent.snapshot.url[1].path;
    if (deckId) {
      console.log(deckId);
    }
    this.selectedSource$ = new Subject();

    this.sources$ = this.deckService.listAll().pipe(
      map(decks => decks.map(deck => ({ value: deck.id, label: deck.id.split('_').join('/') }))),
    );
    this.source$ = this.selectedSource$.pipe(
      defaultIfEmpty(deckId),
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
  }

}
