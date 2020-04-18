import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'ygm-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements OnInit {

  @Input() initialValue: Item;
  @Input() selectValues: Item[];
  @Output() valueChange = new EventEmitter();
  active: Item;

  constructor() { }

  ngOnInit(): void {
    this.select(this.initialValue);
  }

  select(evt: Item): void {
    this.active = evt;
    this.onValueChanged();
  }

  onValueChanged(): void {
    this.valueChange.emit(this.active.value);
  }

}
