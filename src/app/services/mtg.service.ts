import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Card } from '../model/card';

@Injectable({
  providedIn: 'root'
})
export class MtgService {

  constructor(private http: HttpClient) { }

  public getCardByName(cardName: string): Observable<Card> {
    return this.http.get('https://api.scryfall.com/cards/named?exact='+cardName).pipe(
      map(mtgCard => ({
        externalId: mtgCard['id'],
        name: mtgCard['name'],
        imgUrl: mtgCard['image_uris']['normal'], //small, normal, large, png, art_crop, border_crop
        cmc: mtgCard['cmc'],
        manaCost: mtgCard['mana_cost'],
        oracle: mtgCard['oracle_text'],
        rarity: mtgCard['rarity'],
        amount: 1,
      }))
    );
  }
}
