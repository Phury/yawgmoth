import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
  selector: 'ygm-card-pill',
  templateUrl: './card-pill.component.html',
  styleUrls: ['./card-pill.component.css']
})
export class CardPillComponent implements OnInit {
  @Input() card: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
