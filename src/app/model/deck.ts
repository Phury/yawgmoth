import { Card } from './card';
import { Observable } from 'rxjs';

export interface DeckMeta {
	id: string;
	name?: string;
	format?: string;
	author?: string;
	previewCard?: string;
	colorIdentity?: string[];
	provenance?: string;
}

export interface Deck {
	name: string;
	cards: Card[];
	sideboard?: Card[];
	companion?: Card;
	commander?: Card;
	meta?: DeckMeta;
}


export interface DeckForm {
	id?: string;
	name?: string;
	format?: string;
	platform?: string;
	preview?: string;
	author?: string;
	cards: string;
	sideboard?: string;
}


export interface DeckView {
	meta$: Observable<DeckMeta>;
	mainboardGrouped$: Observable<Map<string, Card[]>>;
	sideboard$?: Observable<Card[]>;
	companion$?: Observable<Card>;
	commander$?: Observable<Card>;
}