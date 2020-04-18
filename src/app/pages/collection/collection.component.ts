import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { CollectionService } from 'src/app/services/collection.service';
import { Collectible } from 'src/app/model/collectible';

@Component({
  selector: 'ygm-collection',
  templateUrl: './collection.component.html',
})
export class CollectionComponent implements OnInit {
  collection$: Observable<Collectible[]>;

  constructor(private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.collection$ = this.collectionService.getCollection();
  }
}
