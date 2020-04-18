import { Component, OnInit } from '@angular/core';
import { Subject, Observable, combineLatest } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap, subscribeOn, map, filter, startWith } from 'rxjs/operators';
import { CollectionService } from 'src/app/services/collection.service';
import { Collectible } from 'src/app/model/collectible';

@Component({
  selector: 'ygm-collection',
  templateUrl: './collection.component.html',
})
export class CollectionComponent implements OnInit {
  searchFilter: string;
  searchFilter$ = new Subject<string>();
  filterdCollection$: Observable<Collectible[]>;

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.searchFilter$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
    );

    this.filterdCollection$ = combineLatest([
      this.collectionService.getCollection(),
      this.searchFilter$.pipe(startWith('')),
    ]).pipe(
      map(([elements, search]) => elements
        .filter(state => state.cardName.toLowerCase().startsWith(search.toLowerCase()))
      ),
    );
  }
}
