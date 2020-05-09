import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of, merge, combineLatest } from 'rxjs';
import { flatMap, map, find, shareReplay, tap } from 'rxjs/operators';
import { MtgService } from './mtg.service';
import { Deck, DeckMeta, DeckInfo } from '../model/deck';
import { Card } from '../model/card';
import { CsvService } from './csv.service';

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

  public listAllStashedDecks(): Observable<Deck[]> {
    return of(this.loadFromLocalStorage()).pipe(
      shareReplay(1),
    );
  }

  private loadFromLocalStorage(): Deck[] {
    let decks: Deck[] = JSON.parse(localStorage.getItem('decks'));
    return (decks === null ? [] : decks);
  }

  public store(deck: Deck) {
    let decks = this.loadFromLocalStorage();
    decks.push(deck);
    localStorage.setItem('decks', JSON.stringify(decks));
  }

  public findMetadataById(deckId: string): Observable<DeckMeta> {
    return merge(this.listAllDecks(), this.listAllWishDecks()).pipe(
      flatMap(meta => meta),
      find(meta => meta.id === deckId)
    );
  }

  public preview(deckInfo: DeckInfo): Observable<Deck> {
    return of(deckInfo).pipe(
      map(d => d.cards),
      map(deckTxt => this.parseDeckText(deckTxt)),
      flatMap(o => o),
      map(cards => ({name: deckInfo.name, cards: cards})),
      tap(deck => console.log(deck)),
    );
  }

  public getDeckById(deckId: string): Observable<Deck> {
    const deckPath = deckId.split('_').join('/');
    return this.http.get(`assets/decks/${deckPath}.txt`, { responseType: 'text' as 'json'}).pipe(
      map((deckTxt: string) => this.parseDeckText(deckTxt)),
      flatMap(o => o),
      map(cards => ({name: deckId, cards: cards})),
    );
  }

  private parseDeckText(deckTxt: string): Observable<Card[]> {
    let currentSection = 'mainboard';
    const cards$ = deckTxt.split(/\r?\n/)
        .filter(str => str && str.length > 0)
        .map(line => {
          const partial = this.parseCardLine(line, currentSection);
          if (partial.section !== currentSection) {
            currentSection = partial.section;
          }
          return partial;
        })
        .filter(partial => partial.name !== null)
        .map(partial => this.getCard(partial)); // [Observable<Card>]
    return forkJoin(cards$); // Observable<Card[]>
  }

  private getCard(partial: {name: string, amount: number, section: string}): Observable<Card> {
    return this.mtgService.getCardByName(partial.name).pipe(
      map(card => ({...card, amount: partial.amount, board: partial.section.toLowerCase()}))
    );
  }

  private parseCardLine(cardLine: string, sectionName: string): {name: string, amount: number, section: string} {
    const tokens = cardLine.split(' ');
    if (tokens[0] === '#') {
      return { name: null, amount: null, section: tokens[1] };
    } else {
      return { name: tokens.slice(1).join(' '), amount: Number(tokens[0]), section: sectionName };
    }
  }

  private getCsv(path: string): Observable<string> {
    return this.http.get(path, { responseType: 'text'});
  }
}
