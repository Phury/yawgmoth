import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckMeta } from 'src/app/model/deck';
import { DeckService } from 'src/app/services/deck.service';

@Component({
  selector: 'ygm-wish-list',
  templateUrl: './wish-list.component.html',
})
export class WishListComponent implements OnInit {

  meta$: Observable<DeckMeta[]>;

  constructor(private deckService: DeckService) { }

  ngOnInit(): void {
    this.meta$ = this.deckService.listAllWishDecks();
  }


}
