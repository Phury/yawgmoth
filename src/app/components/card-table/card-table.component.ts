import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';
import { Collectible } from 'src/app/model/collectible';
import { debounceTime, distinctUntilChanged, startWith, map } from 'rxjs/operators';

@Component({
	selector: 'ygm-card-table',
	templateUrl: './card-table.component.html',
	styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {

	@Input() searchable: boolean = true;
	@Input() cards$: Observable<Collectible[]>;
	searchFilter: string = '';
	searchFilter$ = new Subject<string>();
	filterdCards$: Observable<Collectible[]>;

	constructor() { }

	ngOnInit(): void {
		this.searchFilter$.pipe(
			debounceTime(400),
			distinctUntilChanged(),
		);
		this.filterdCards$ = combineLatest([
			this.cards$,
			this.searchFilter$.pipe(startWith('')),
		]).pipe(
			map(([elements, search]) => elements.filter(state => state.cardName.toLowerCase().startsWith(search.toLowerCase()))),
		);
	}

}
