import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CollectionService } from 'src/app/services/collection.service';
import { Collectible } from 'src/app/model/collectible';
import { AppConfigService } from 'src/app/services/app-config.service';
import { AppConfig } from 'src/app/model/app-config';

@Component({
	selector: 'ygm-collection',
	templateUrl: './collection.component.html',
})
export class CollectionComponent implements OnInit {
	config: AppConfig;
	collection$: Observable<Collectible[]>;

	constructor(private collectionService: CollectionService,
							appConfigService: AppConfigService) {
		this.config = appConfigService.getConfig();
	}

	ngOnInit(): void {
		this.collection$ = this.collectionService.getCollection();
	}
}
