import { Component, OnInit } from '@angular/core';
import { DeckInfo, Deck } from 'src/app/model/deck';
import { DeckService } from 'src/app/services/deck.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ygm-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  deck: DeckInfo;
  preview$: Observable<Deck>;

  constructor(private deckService: DeckService) {
  }

  ngOnInit(): void {
    this.deck = {
      name: '',
      format: 'standard',
      preview: 'counterspell',
      cards: '1 counterspell\n3 Sakura-Tribe Elder\n4 Eternal Witness\n2 Thing in the Ice'
    };
  }

  preview() {
    this.preview$ = this.deckService.preview(this.deck);
  }
}
