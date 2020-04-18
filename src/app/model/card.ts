import { Subject } from 'rxjs';

export const CARD_TYPES = ['land', 'instant', 'sorcery', 'enchantment', 'creature', 'planeswalker', 'artifact'];

export interface Card {
  name: string;
  typeLine?: string;
  types?: string[]
  oracleText?: string;
  externalId?: string;
  cmc?: number;
  manaCost?: string;
  imgUrl?: string;
  imgArtUrl?: string;
  rarity?: string;
  /*ui */
  sideboard?: boolean;
  amount?: number;
  showDetails$?: Subject<boolean>;
}
