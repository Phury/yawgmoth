import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'ygm-card-tile',
  templateUrl: './card-tile.component.html',
})
export class CardTileComponent implements OnInit {
  @Input() card: Card;
  showFace: string = 'front';

  constructor() { }

  ngOnInit(): void {
  }

  toggleFace() {
    this.showFace = (this.showFace === 'front' ? 'back' : 'front');
  }
}
