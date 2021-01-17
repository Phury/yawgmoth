import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Collectible } from '../model/collectible';
import { CsvService } from './csv.service';
import { flatMap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class CollectionService {

	constructor(
		private http: HttpClient,
		private csvService: CsvService) { }

	getCollection(): Observable<Collectible[]> {
		return this.http.get('assets/collection.tsv', { responseType: 'text'}).pipe(
			flatMap(tsv => of(this.csvService.parse(tsv, /\t/) as Collectible[])),
		);
	}

	getWishCards(): Observable<Collectible[]> {
		return this.http.get('assets/wishcards.csv', { responseType: 'text'}).pipe(
			flatMap(csv => of(this.csvService.parse(csv) as Collectible[]))
		);
	}
}
