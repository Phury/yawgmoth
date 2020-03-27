import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ygm-mana',
  templateUrl: './mana.component.html',
})
export class ManaComponent implements OnInit {
  @Input() cost: string;

  constructor() { }

  ngOnInit(): void {
  }

  manaClasses(): string[][] { // TODO: compute on @Input setter
    return this.cost.split(/{(.*?)}/)
      .filter(str => str.trim() != "")
      .map(token => token.toLowerCase().replace('/', ''))
      .map(cost => ['ms', 'ms-cost', 'ms-'+cost]);
  }
}
