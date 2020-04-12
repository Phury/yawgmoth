import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'ygm-card-tile',
  templateUrl: './card-tile.component.html',
})
export class CardTileComponent implements OnInit {
  @Input() card: Card

  constructor() { }

  ngOnInit(): void {
  }

}
