import { Card } from './card';

export interface DeckMeta {
  id: string;
  name?: string;
  format?: string;
  author?: string;
}

export interface Deck {
  name: string;
  cards: Card[];
  meta?: DeckMeta;
}
