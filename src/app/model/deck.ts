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
  sideboard?: Card[];
  meta?: DeckMeta;
}


export interface DeckInfo {
  id?: string;
  name?: string;
  format?: string;
  preview?: string;
  author?: string;
  cards: string;
  sideboard?: string;
}