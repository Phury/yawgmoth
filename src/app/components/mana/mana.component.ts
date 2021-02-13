import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'ygm-mana',
	templateUrl: './mana.component.html',
})
export class ManaComponent implements OnInit {
	@Input() cost: string;
	@Input() type: string[];

	constructor() { }

	ngOnInit(): void {
	}

	manaClasses(): string[][] { // TODO: compute on @Input setter
		if (!this.cost) {
			if (this.type && this.type.length > 0) {
				if (this.type.indexOf('artifact') > -1) return [['ms', 'ms-artifact']];
				if (this.type.indexOf('creature') > -1) return [['ms', 'ms-creature']];
				if (this.type.indexOf('enchantment') > -1) return [['ms', 'ms-enchantment']];
				if (this.type.indexOf('instant') > -1) return [['ms', 'ms-instant']];
				if (this.type.indexOf('land') > -1) return [['ms', 'ms-land']];
				if (this.type.indexOf('planeswalker') > -1) return [['ms', 'ms-planeswalker']];
				if (this.type.indexOf('sorcery') > -1) return [['ms', 'ms-sorcery']];
			}
			return [[]];
		}
		return this.cost.split(/{(.*?)}/)
			.filter(str => str.trim() !== '')
			.map(token => token.toLowerCase().replace('/', ''))
			.map(cost => ['ms', 'ms-cost', 'ms-' + cost]);
	}
}
