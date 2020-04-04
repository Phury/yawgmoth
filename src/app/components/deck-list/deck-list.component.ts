import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckMeta } from '../../model/deck';
import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'ygm-deck-list',
  templateUrl: './deck-list.component.html',
})
export class DeckListComponent implements OnInit {
  meta$: Observable<DeckMeta[]>;

  constructor(private deckService: DeckService) { }

  ngOnInit(): void {
    this.meta$ = this.deckService.listAllMetadata();
  }

}
