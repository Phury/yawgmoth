import { Component, OnInit } from '@angular/core';
import { Growl, GrowlService } from 'src/app/services/growl.service';


@Component({
	selector: 'ygm-growl',
	templateUrl: './growl.component.html',
	styleUrls: ['./growl.component.css']
})
export class GrowlComponent implements OnInit {
	notifications: Growl[] = [];
	
	constructor(
		private growl: GrowlService) { }

	ngOnInit(): void {
		this.growl.subscribe((growl: Growl) => this.notifications.push(growl));
	}
	
	clear(growl: Growl): void {
		const index = this.notifications.indexOf(growl, 0);
		if (index > -1) {
			 this.notifications.splice(index, 1);
		}
	}
}
