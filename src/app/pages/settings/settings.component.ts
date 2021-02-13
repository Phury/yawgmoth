import { Component, OnInit } from '@angular/core';
import { Settings } from 'src/app/model/settings';
import { AppConfigService } from 'src/app/services/app-config.service';
import { AppConfig } from 'src/app/model/app-config';
import { Item } from 'src/app/core/item';

@Component({
	selector: 'ygm-settings',
	templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
	settings: Settings;

	constructor(appConfigService: AppConfigService) {
		this.settings = this.mapToSettings(appConfigService.getConfig());
	}

	ngOnInit(): void {
	}

	onSave(): void {
		console.log('save clicked');
	}

	onViewModeChange(evt: any): void {
		console.log(evt);
	}
	
	private mapToSettings(config: AppConfig): Settings {
		return {
			viewModes: config.viewModes.map(this.mapToItem),
			selectedViewMode: config.selectedViewMode,
		} as Settings;
	}
	
	private mapToItem(setting: string): Item {
		return { value: setting, label: setting }
	}
}
