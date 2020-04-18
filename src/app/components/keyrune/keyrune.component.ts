import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ygm-keyrune',
  templateUrl: './keyrune.component.html',
})
export class KeyruneComponent implements OnInit {
  @Input() symbol: string;

  constructor() { }

  ngOnInit(): void {
  }

  keyruneClasses(): string[][] { // TODO: compute on @Input setter
    return [['ss', 'ss-'+this.symbol.toLowerCase()]];
  }
}
