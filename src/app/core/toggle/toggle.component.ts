import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Item } from '../item';

@Component({
  selector: 'ygm-toggle',
  templateUrl: './toggle.component.html',
})
export class ToggleComponent implements OnInit {

  @Input() values: Item[];
  @Input() initialValue: Item;
  @Output() valueChange = new EventEmitter();
  active: Item;

  constructor() { }

  ngOnInit(): void {
    this.active = this.initialValue;
    this.onValueChanged();
  }

  onValueChanged(): void {
    this.valueChange.emit(this.active.value);
  }

  toggle(): void {
    this.active = (this.active === this.values[0] ? this.values[1] : this.values[0]);
    this.onValueChanged();
  }

  selectedClass(selectedItem: Item): string[] {
    return selectedItem.value === this.active.value ? ['btn-primary'] : [];
  }

}
