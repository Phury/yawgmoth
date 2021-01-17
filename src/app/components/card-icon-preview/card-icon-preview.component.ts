import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Card } from 'src/app/model/card';
import { MtgService } from 'src/app/services/mtg.service';
import { Subscription, ReplaySubject } from 'rxjs';

@Component({
	selector: 'ygm-card-icon-preview',
	templateUrl: './card-icon-preview.component.html',
	styleUrls: ['./card-icon-preview.component.css']
})
export class CardIconPreviewComponent implements OnInit, OnDestroy {
	
	private subscriptions = new Subscription();
	
	@Input() card?: Card;
	@Input() cardName?: string;
	
	active: boolean = false;
	displayedCard$ = new ReplaySubject<Card>(1);

	constructor(private mtgService: MtgService) { }

	ngOnInit(): void {
		this.displayedCard$.next(this.card);
	}
	
	ngOnDestroy(): void {
		this.subscriptions.unsubscribe();
	}

	toggle() {
		this.active = !this.active;
		if (this.active && this.cardName && !this.card) {
			this.subscriptions.add(
				this.mtgService.getCardByName(this.cardName).subscribe(card => {
					this.displayedCard$.next(card);
					this.card = card;
				})
			);
		}
	}

}
