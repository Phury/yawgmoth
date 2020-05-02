import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DeckMeta } from '../../model/deck';
import { DeckService } from '../../services/deck.service';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'ygm-deck-list',
  templateUrl: './deck-list.component.html',
})
export class DeckListComponent implements OnInit {
  selectedView: string;
  meta$: Observable<DeckMeta[]>;

  constructor(
    private settingsService: SettingsService,
    private deckService: DeckService) { }

  ngOnInit(): void {
    this.selectedView = this.settingsService.load().selectedViewMode;
    this.meta$ = this.deckService.listAllDecks();
  }

  toggleView(evt: any): void {
    this.selectedView = evt;
  }
}
