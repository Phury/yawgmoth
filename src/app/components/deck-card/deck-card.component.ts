import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as env from '../../env';
import { Deck, DeckMeta } from '../../model/deck';
import { Card } from '../../model/card';
import { MtgService } from '../../services/mtg.service';

@Component({
  selector: 'ygm-deck-card',
  templateUrl: './deck-card.component.html',
})
export class DeckCardComponent implements OnInit {
  @Input() meta: DeckMeta;
  previewCard$: Observable<Card>;

  constructor(private mtgService: MtgService) { }

  ngOnInit(): void {
    this.previewCard$ = this.mtgService.getCardByName(this.meta.previewCard);
  }

}
