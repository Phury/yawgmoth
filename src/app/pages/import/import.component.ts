import { Component, OnInit } from '@angular/core';
import { DeckInfo, Deck } from 'src/app/model/deck';
import { DeckService } from 'src/app/services/deck.service';
import { NameService } from 'src/app/services/name.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ygm-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
  deck: DeckInfo;
  preview$: Observable<Deck>;

  constructor(
    private deckService: DeckService,
    private nameService: NameService) {
  }

  ngOnInit(): void {
    this.deck = {
      name: this.nameService.random(),
      format: 'standard',
      preview: 'counterspell',
      cards: '1 counterspell\n3 Sakura-Tribe Elder\n4 Eternal Witness\n2 Thing in the Ice'
    };
  }

  preview() {
    this.preview$ = this.deckService.preview(this.deck);
  }

  save() {
    this.preview$.subscribe(deck => this.deckService.store(deck));
  }
}
