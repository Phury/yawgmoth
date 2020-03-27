import * as env from './env';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DeckMeta } from './model/deck';
import { DeckService } from './services/deck.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  readonly env = env;
  title = 'yawgmoth';
  meta$: Observable<DeckMeta>;

  constructor(private deckService: DeckService) { }

  ngOnInit(): void {
    this.meta$ = this.deckService.list();
  }
}
