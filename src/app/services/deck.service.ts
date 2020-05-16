import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of, merge, combineLatest } from 'rxjs';
import { flatMap, map, find, shareReplay, tap, catchError } from 'rxjs/operators';
import { MtgService } from './mtg.service';
import { Deck, DeckMeta, DeckForm } from '../model/deck';
import { Card } from '../model/card';
import { CsvService } from './csv.service';

const DECK_SEPARATORS = ['Deck', 'Sideboard', 'Commander', 'Companion'];

@Injectable({
	providedIn: 'root'
})
export class DeckService {

	constructor(
		private http: HttpClient,
		private mtgService: MtgService,
		private csvService: CsvService) { }

	public listAll(): Observable<DeckMeta[]> {
		return combineLatest([
			this.listAllDecks(),
			this.listAllWishDecks(),
		]).pipe(
			map(([owned, wished]) => owned.concat(wished)),
		);
	}

	public listAllDecks(): Observable<DeckMeta[]> {
		return this.getCsv('assets/decks.csv').pipe(
			flatMap(csv => of(this.csvService.parse(csv) as DeckMeta[])),
			shareReplay(1),
		);
	}

	public listAllWishDecks(): Observable<DeckMeta[]> {
		return this.getCsv('assets/wishdecks.csv').pipe(
			flatMap(csv => of(this.csvService.parse(csv) as DeckMeta[])),
			shareReplay(1),
		);
	}

	public listAllStashedDecks(): Observable<DeckMeta[]> {
		return of(this.loadFromLocalStorage()).pipe(
			map(decks => decks.map(deck => deck.meta)),
			//shareReplay(1),
		);
	}

	private loadFromLocalStorage(): Deck[] {
		let decks: Deck[] = JSON.parse(localStorage.getItem('decks'));
		return (decks === null ? [] : decks);
	}

	public save(deck: Deck): void {
		let decks = this.loadFromLocalStorage();
		decks.push(deck);
		localStorage.setItem('decks', JSON.stringify(decks));
	}
	
	public deleteByName(name: string): Deck {
		let decks = this.loadFromLocalStorage();
		let deleted = decks.find(deck => deck.name === name);
		if (deleted) {
			localStorage.setItem('decks', JSON.stringify(decks.filter(deck => deck.name !== name)));
		}
		return deleted;
	}

	public findMetadataById(deckId: string): Observable<DeckMeta> {
		return merge(
		this.listAllDecks(), 
		this.listAllWishDecks(),
		this.listAllStashedDecks(),
	).pipe(
			flatMap(meta => meta),
			find(meta => meta.id === deckId)
		);
	}

	public preview(deckForm: DeckForm): Observable<Deck> {
		return of(deckForm).pipe(
			map(d => d.cards),
			map(deckTxt => this.parseDeckText(deckTxt)),
			flatMap(o => o),
			map(cards => ({name: deckForm.name, cards: cards})),
			//tap(deck => console.log(deck)),
		);
	}

	public getDeckById(deckId: string): Observable<Deck> {
		const deckPath = deckId.split('_').join('/');
		return this.http.get(`assets/decks/${deckPath}.txt`, { responseType: 'text' as 'json'}).pipe(
			map((deckTxt: string) => this.parseDeckText(deckTxt)),
			flatMap(o => o),
			map(cards => ({name: deckId, cards: cards})),
			catchError(() => this.loadFromLocalStorage().filter(deck => deck.meta.id === deckId)),
		);
	}

	// TODO: move to txt deck parser
	private parseDeckText(deckTxt: string): Observable<Card[]> {
		let currentSection = 'deck';
		const cards$ = deckTxt.split(/\r?\n/)
			.filter(str => str && str.length > 0)
			.map(line => {
				const parsed = this.parseCardLine(line, currentSection);
				if (parsed && parsed.section !== currentSection) {
					currentSection = parsed.section;
				}
				return parsed;
			})
			.filter(parsed => parsed && !this.isBlank(parsed.name))
			.map(parsed => this.getCard(parsed)); // [Observable<Card>]
		return forkJoin(cards$); // Observable<Card[]>
	}

	private getCard(parsed: CardLine): Observable<Card> {
		return this.mtgService.getCardByName(parsed.name).pipe(
			map(card => ({...card, amount: parsed.amount, board: parsed.section})),
			catchError(() => of({name: parsed.name, amount: parsed.amount, board: parsed.section} as Card))
		);
	}

	private parseCardLine(cardLine: string, sectionName: string): CardLine {
		if (this.isBlank(cardLine)) {
			return null;
		}
		
		const tokens = cardLine.split(' ');
		if (tokens[0] === '#') {
			return { name: null, amount: null, section: tokens[1].toLowerCase() };
		} else if (DECK_SEPARATORS.indexOf(tokens[0]) > 0) {
			return { name: null, amount: null, section: tokens[0].toLowerCase() };
		} else {
			return { name: tokens.slice(1).join(' '), amount: Number(tokens[0]), section: sectionName };
		}
	}

	private getCsv(path: string): Observable<string> {
		return this.http.get(path, { responseType: 'text'});
	}
	
	// TODO: move to Prototype.string
	private isBlank(str: string): boolean {
		return !str || 0 === str.trim().length;
	}
}

interface CardLine {
	name: string;
	amount: number;
	section: string;
}
