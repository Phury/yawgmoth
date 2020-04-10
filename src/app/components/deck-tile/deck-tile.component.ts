import { Component, OnInit, Input } from '@angular/core';
import { DeckMeta } from 'src/app/model/deck';
import { Observable } from 'rxjs';
import { Card } from 'src/app/model/card';
import { MtgService } from 'src/app/services/mtg.service';

@Component({
  selector: 'ygm-deck-tile',
  templateUrl: './deck-tile.component.html',
})
export class DeckTileComponent implements OnInit {
  @Input() meta: DeckMeta;
  previewCard$: Observable<Card>;

  constructor(private mtgService: MtgService) { }

  ngOnInit(): void {
    this.previewCard$ = this.mtgService.getCardByName(this.meta.previewCard);
  }

}
