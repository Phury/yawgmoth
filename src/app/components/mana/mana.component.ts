import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ygm-mana',
	templateUrl: './mana.component.html',
})
export class ManaComponent implements OnInit {
	@Input() cost: string;
	@Input() type: string;

	constructor() { }

	ngOnInit(): void {
	}

	manaClasses(): string[][] { // TODO: compute on @Input setter
		if (!this.cost) {
			console.log(this.type);
			if (this.type === 'land') {
				return [['ms', 'ms-land']];
			}
			return [[]];
		}
		return this.cost.split(/{(.*?)}/)
			.filter(str => str.trim() !== '')
			.map(token => token.toLowerCase().replace('/', ''))
			.map(cost => ['ms', 'ms-cost', 'ms-' + cost]);
	}
}
