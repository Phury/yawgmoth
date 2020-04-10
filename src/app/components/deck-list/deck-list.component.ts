import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckMeta } from '../../model/deck';
import { DeckService } from '../../services/deck.service';

@Component({
  selector: 'ygm-deck-list',
  templateUrl: './deck-list.component.html',
})
export class DeckListComponent implements OnInit {
  view: string = 'B';
  meta$: Observable<DeckMeta[]>;

  constructor(private deckService: DeckService) { }

  ngOnInit(): void {
    this.meta$ = this.deckService.listAllMetadata();
  }

  toggleView(): void {
    this.view = (this.view === 'A' ? 'B' : 'A');
  }

  viewClass(elt: string): string[] {
    return elt === this.view ? ['btn-primary'] : [];
  }
}
