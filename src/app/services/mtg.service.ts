import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError, shareReplay } from 'rxjs/operators';
import { Card, CARD_TYPES, CardFace } from '../model/card';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class MtgService {

  constructor(
    private log: LoggerService,
    private http: HttpClient) { }

  public getCardByName(cardName: string): Observable<Card> {
    return this.http.get(`https://api.scryfall.com/cards/named?exact=${cardName}`).pipe(
      tap(mtgCard => this.log.debug(mtgCard, this)),
      map(mtgCard => this.toCard(mtgCard)),
      shareReplay(1),
      catchError((error) => {
        // TODO: handle display of erroneous card
        console.error(error);
        return of({name: cardName, amount: 0, types: []} as Card);
      }),
    );
  }

  private toCard(mtgCard: any): Card {
    const card = {
      externalId: mtgCard['id'],
      name: mtgCard['name'],
      typeLine: mtgCard['type_line'],
      //TODO: superTypes, subTypes
      types: this.parseTypeLine(mtgCard['type_line']),
      oracleText: mtgCard['oracle_text'],
      flavorText: mtgCard['flavor_text'],
      cmc: mtgCard['cmc'],
      manaCost: mtgCard['mana_cost'],
      rarity: mtgCard['rarity'],
      layout: mtgCard['layout'],
      amount: 1,
    } as Card;
    if (mtgCard['card_faces']) {
      card.faces = [
        this.toCardFace(mtgCard['card_faces'][0]),
        this.toCardFace(mtgCard['card_faces'][1]),
      ];
    }
    if (mtgCard['image_uris']) {
      //small, normal, large, png, art_crop, border_crop
      card.imgUrl = mtgCard['image_uris']['normal'];
      card.imgArtUrl = mtgCard['image_uris']['art_crop'];
    }
    return card;
  }

  private toCardFace(mtgCardFace: any): CardFace {
    const cardFace: CardFace = {
      name: mtgCardFace['name'],
      typeLine: mtgCardFace['type_line'],
      types: this.parseTypeLine(mtgCardFace['type_line']),
      oracleText: mtgCardFace['oracle_text'],
      flavorText: mtgCardFace['flavor_text'],
      manaCost: mtgCardFace['mana_cost'],
    };

    if (mtgCardFace['image_uris']) {
      cardFace.imgUrl = mtgCardFace['image_uris']['normal'];
    }
    return cardFace;
  }

  private parseTypeLine(typeLine: string): string[] {
    return typeLine.split(' ').reduce((acc, type) => {
      const val = CARD_TYPES.find(elt => elt === type.toLowerCase());
      if (val) { acc.push(val); }
      return acc;
    }, []);
  }
}
