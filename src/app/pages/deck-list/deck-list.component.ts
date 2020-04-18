import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DeckMeta } from '../../model/deck';
import { DeckService } from '../../services/deck.service';
import { Item } from 'src/app/core/item';

@Component({
  selector: 'ygm-deck-list',
  templateUrl: './deck-list.component.html',
})
export class DeckListComponent implements OnInit {
  viewModes: Item[] = [{
    value: 'cardView',
    label: 'Card View',
  },
  {
    value: 'tileView',
    label: 'Tile View',
  }];
  selectedView: string;
  meta$: Observable<DeckMeta[]>;

  constructor(private deckService: DeckService) { }

  ngOnInit(): void {
    this.meta$ = this.deckService.listAllDecks();
  }

  toggleView(evt: any): void {
    this.selectedView = evt;
  }
}
