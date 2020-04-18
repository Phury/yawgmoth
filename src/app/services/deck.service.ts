import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of, merge } from 'rxjs';
import { flatMap, map, find, tap, share } from 'rxjs/operators';
import { MtgService } from './mtg.service';
import { Deck, DeckMeta } from '../model/deck';
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

  public listAllDecks(): Observable<DeckMeta[]> {
    return this.getCsv('assets/decks.csv').pipe(
      flatMap(csv => of(this.csvService.parse(csv) as DeckMeta[])),
      share(),
    );
  }

  public listAllWishDecks(): Observable<DeckMeta[]> {
    return this.getCsv('assets/wishdecks.csv').pipe(
      flatMap(csv => of(this.csvService.parse(csv) as DeckMeta[])),
      share(),
    );
  }

  public findMetadataById(deckId: string): Observable<DeckMeta> {
    return merge(this.listAllDecks(), this.listAllWishDecks()).pipe(
      flatMap(meta => meta),
      find(meta => meta.id === deckId)
    );
  }

  public getDeckById(deckId: string): Observable<Deck> {
    const deckPath = deckId.split('_').join('/');
    return this.http.get(`assets/decks/${deckPath}.txt`, { responseType: 'text' as 'json'}).pipe(
      map((deckTxt: string) => {
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
      }),
      flatMap(o => o),
      // tap(cards => console.log(cards)),
      map(cards => ({name: deckId, cards: cards})),
    );
  }

  private getCard(partial: {name: string, amount: number, section: string}): Observable<Card> {
    return this.mtgService.getCardByName(partial.name).pipe(
      map(card => ({...card, amount: partial.amount, sideboard: partial.section.toLowerCase() === 'sideboard'}))
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
