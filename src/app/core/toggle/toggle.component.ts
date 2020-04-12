import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'ygm-toggle',
  templateUrl: './toggle.component.html',
})
export class ToggleComponent implements OnInit {

  @Input() values: any[];
  @Input() labels: string[];
  @Input() initialValue: any;
  currentValue: any;
  @Output() valueChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.currentValue = this.initialValue;
    this.valueChange.emit(this.currentValue);
  }

  toggle(): void {
    this.currentValue = (this.currentValue === this.values[0] ? this.values[1] : this.values[0]);
    this.valueChange.emit(this.currentValue);
  }

  selectedClass(selectedValue: string): string[] {
    return selectedValue === this.currentValue ? ['btn-primary'] : [];
  }

}
