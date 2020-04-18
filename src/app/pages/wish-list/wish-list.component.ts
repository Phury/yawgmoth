import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckMeta } from 'src/app/model/deck';
import { DeckService } from 'src/app/services/deck.service';
import { Collectible } from 'src/app/model/collectible';

@Component({
  selector: 'ygm-wish-list',
  templateUrl: './wish-list.component.html',
})
export class WishListComponent implements OnInit {

  meta$: Observable<DeckMeta[]>;
  wishCards$: Observable<Collectible[]>;

  constructor(private deckService: DeckService) { }

  ngOnInit(): void {
    this.meta$ = this.deckService.listAllWishDecks();
    this.wishCards$ = this.c
  }


}
