import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/app/model/card';

@Component({
	selector: 'ygm-card-icon-preview',
	templateUrl: './card-icon-preview.component.html',
	styleUrls: ['./card-icon-preview.component.css']
})
export class CardIconPreviewComponent implements OnInit {
	@Input() card: Card;
	active: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	toggle() {
		this.active = !this.active;
	}

}
