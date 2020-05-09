import { Subject } from 'rxjs';

export const CARD_TYPES = ['land', 'instant', 'sorcery', 'enchantment', 'creature', 'planeswalker', 'artifact'];

export interface CardFace {
  name: string;
  typeLine: string;
  types: string[]
  oracleText?: string;
  flavorText?: string;
  manaCost?: string;
  imgUrl?: string;
}

export interface Card {
  name: string;
  typeLine?: string;
  types?: string[]
  oracleText?: string;
  flavorText?: string;
  externalId?: string;
  cmc?: number;
  manaCost?: string;
  imgUrl?: string;
  imgArtUrl?: string;
  rarity?: string;
  layout?: string;
  faces?: CardFace[]
  /*ui */
  sideboard?: boolean;
  amount?: number;
  showDetails: boolean;
}
