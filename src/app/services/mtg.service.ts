import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Card, CARD_TYPES } from '../model/card';
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
      map(mtgCard => this.toModel(mtgCard)),
    );
  }

  private toModel(mtgCard: any): Card {
    const card = {
      externalId: mtgCard['id'],
      name: mtgCard['name'],
      typeLine: mtgCard['type_line'],
      //TODO: superTypes, subTypes
      types: this.parseTypeLine(mtgCard['type_line']),
      oracleText: mtgCard['oracle_text'],
      cmc: mtgCard['cmc'],
      manaCost: mtgCard['mana_cost'],
      rarity: mtgCard['rarity'],
      amount: 1,
    } as Card;
    if (mtgCard['image_uris']) {
      //small, normal, large, png, art_crop, border_crop
      card.imgUrl = mtgCard['image_uris']['normal'];
      card.imgArtUrl = mtgCard['image_uris']['art_crop'];
    } else {
      // TODO: handle dual face cards
      card.imgUrl = mtgCard['card_faces'][0]['image_uris']['normal'];
      card.imgArtUrl = mtgCard['card_faces'][0]['image_uris']['art_crop'];
    }
    return card;
  }

  private parseTypeLine(typeLine: string): string[] {
    return typeLine.split(' ').reduce((acc, type) => {
      const val = CARD_TYPES.find(elt => elt === type.toLowerCase());
      if (val) { acc.push(val); }
      return acc;
    }, []);
  }
}
