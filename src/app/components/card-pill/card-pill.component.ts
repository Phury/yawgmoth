import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model/card';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'ygm-card-pill',
  templateUrl: './card-pill.component.html',
  styleUrls: ['./card-pill.component.css']
})
export class CardPillComponent implements OnInit {
  @Input() card: Card;

  constructor(private lightbox: Lightbox) { }

  ngOnInit(): void {
  }

  open() {
    if (this.card.layout === 'normal') {
      this.lightbox.open([{
        src: this.card.imgUrl,
        caption: this.card.name,
        thumb: this.card.name,
      }]);
    } else {
      this.lightbox.open([{
        src: this.card.faces[0].imgUrl,
        caption: this.card.name,
        thumb: this.card.name,
      }]);
    }
  }

}
