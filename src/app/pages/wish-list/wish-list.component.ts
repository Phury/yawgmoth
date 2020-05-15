import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckMeta, Deck } from 'src/app/model/deck';
import { DeckService } from 'src/app/services/deck.service';
import { Collectible } from 'src/app/model/collectible';
import { CollectionService } from 'src/app/services/collection.service';

@Component({
  selector: 'ygm-wish-list',
  templateUrl: './wish-list.component.html',
})
export class WishListComponent implements OnInit {

  meta$: Observable<DeckMeta[]>;
  stash$: Observable<DeckMeta[]>;
  wishCards$: Observable<Collectible[]>;

  constructor(
    private deckService: DeckService,
    private collectionService: CollectionService) { }

  ngOnInit(): void {
    this.meta$ = this.deckService.listAllWishDecks();
    this.stash$ = this.deckService.listAllStashedDecks();
    this.wishCards$ = this.collectionService.getWishCards();
  }


}
