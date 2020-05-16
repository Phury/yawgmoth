import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DeckForm, Deck, DeckMeta } from 'src/app/model/deck';
import { DeckService } from 'src/app/services/deck.service';
import { NameService } from 'src/app/services/name.service';
import { GrowlService } from 'src/app/services/growl.service';
import { MtgService } from 'src/app/services/mtg.service';
import { Card } from 'src/app/model/card';
import { debounceTime, distinctUntilChanged, filter, map, flatMap, tap } from 'rxjs/operators';

const MTG_FORMATS = [
	'kitchen',
	'standard',
	'brawl',
	'pioneer',
	'historic',
	'modern',
	'pauper',
	'legacy',
	'penny',
	'vintage',
	'commander'
];

const MTG_PLATFORMS = [
	'any',
	'paper',
	'arena',
	'mtgo',
];

@Component({
	selector: 'ygm-import',
	templateUrl: './import.component.html',
	styleUrls: ['./import.component.css']
})
export class ImportComponent implements OnInit {
	deckForm: DeckForm;
	preview$: Observable<Deck>;
	
	cardSearch$ = new Subject<string>();
	cardSearchResults$: Observable<string[]>
	
	// TODO: refer to constants directly ?!
	mtgFormats = MTG_FORMATS;
	mtgPlatforms = MTG_PLATFORMS;

	constructor(
		private mtgService: MtgService,
		private deckService: DeckService,
		private nameService: NameService,
		private growl: GrowlService) {
	}

	ngOnInit(): void {
		this.deckForm = {
			name: this.nameService.random(),
			format: 'standard',
			platform: 'any',
			preview: 'counterspell',
			cards: '1 counterspell\n3 Sakura-Tribe Elder\n4 Eternal Witness\n2 Thing in the Ice'
		};
		this.cardSearchResults$ = this.cardSearch$.pipe(
			debounceTime(400),
			distinctUntilChanged(),
			filter(input => input.length > 3),
			flatMap(input => this.mtgService.searchCards(input))
		);
		this.onPreview();
	}
	
	onPreview() {
		this.preview$ = this.deckService.preview(this.deckForm);
	}
	
	selectPreview(card: string) {
		this.deckForm.preview = card;
	}
	
	deckFormToDeckMeta(): DeckMeta {
		
		// TODO: use selector
		/*
		const colors = [];
		this.preview$.pipe(
			map(deck => deck.cards.concat(deck.sideboard, deck.commander, deck.companion)),
			map(cards => cards.filter(x => x).reduce((set, card) => {
				card.colorIdentity.forEach(color => set.add(color));
				return set;
			}, new Set())),
		).subscribe(colorIdentities => {
			colors.splice(0, colors.length)
			colors.concat(colorIdentities);
		});
		*/
		return {
			id: this.deckForm.id,
			name: this.deckForm.name,
			format: this.deckForm.format,
			previewCard: this.deckForm.preview,
			colorIdentity: ['U', 'G'],
		}
	}

	onSaveDeck() {
		// TODO: unsubscribe
		// TODO: animate button + make green with tick sign
		// TODO: add link to deck in growl
		this.preview$.subscribe(deck => {
			this.deckService.save({...deck, meta: {
				id: this.deckForm.format + '_' + this.deckForm.name.toLowerCase().replace(" ", "-"),
				name: this.deckForm.name,
				format: this.deckForm.format,
				previewCard: this.deckForm.preview,
			}});
			this.growl.notify({message: `deck '${this.deckForm.name}' stashed!`, type: 'success' });
		});
	}

	copyToClipboard(): void {
		document.addEventListener('copy', (e: ClipboardEvent) => {
			e.clipboardData.setData('text/plain', this.deckToText());
			e.preventDefault();
			document.removeEventListener('copy', null);
		});
		document.execCommand('copy');
		this.growl.notify({message: `deck '${this.deckForm.name}' copied to clipboard!`, type: 'success' });
	}

	deckToText(): string {
				return `
Deck
3 Quench
4 Sinister Sabotage
4 Unsummon
2 Opt
4 Spectral Sailor
4 Omen of the Sea
4 Brineborn Cutthroat
4 Cunning Nightbonder
4 Brazen Borrower
2 Mystical Dispute
4 Sea-Dasher Octopus
1 Mystic Sanctuary
20 Island

Sideboard
2 Cerulean Drake
2 Essence Capture
1 Chemister's Insight
4 Disdainful Stroke
2 Mystical Dispute
4 Aether Gust`;
		}

}
