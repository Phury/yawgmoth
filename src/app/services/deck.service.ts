import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { flatMap, map, find } from 'rxjs/operators';
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

  public listAllMetadata(): Observable<DeckMeta[]> {
    //return this.http.get<DeckMeta[]>('assets/decks.json');
    return this.http.get('assets/decks.csv', { responseType: 'text'}).pipe(
      flatMap(csv => of(this.csvService.parse(csv) as DeckMeta[]))
    );
  }

  public findMetadataById(deckId: string): Observable<DeckMeta> {
    return this.listAllMetadata().pipe(
      flatMap(meta => meta),
      find(meta => meta.id === deckId)
    );
  }

  public getDeckById(deckId: string): Observable<Deck> {
    return this.http.get('assets/decks/'+deckId+'.txt', { responseType: 'text' as 'json'}).pipe(
      map((deckTxt: string) => {
        const cards$ = deckTxt.split(/\r?\n/)
            .filter(str => str && str.length > 0)
            .map(line => this.parseCardLine(line))
            .map(proto => this.getCard(proto)) // [Observable<Card>]
        return forkJoin(cards$); // Observable<Card[]>
      }),
      flatMap(o => o),
      map(cards => ({name: deckId, cards: cards})),
    );
  }

  private getCard(cardTuple:{name: string, amount: number}): Observable<Card> {
    return this.mtgService.getCardByName(cardTuple.name).pipe(
      map(card => ({...card, amount: cardTuple.amount}))
    );
  }

  private parseCardLine(cardLine: string):{name: string, amount: number} {
    const tokens = cardLine.split(' ');
    const cardName = tokens.slice(1).join(' ');
    const cardAmount = Number(tokens[0]);
    return { name: cardName, amount: cardAmount };
  }
}
