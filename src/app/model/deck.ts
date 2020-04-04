import { Card } from './card';

export interface DeckMeta {
  id: string;
  name?: string;
  format?: string;
  author?: string;
  previewCard?: string;
}

export interface Deck {
  name: string;
  cards: Card[];
  meta?: DeckMeta;
}
