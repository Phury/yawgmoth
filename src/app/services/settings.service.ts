import { Injectable } from '@angular/core';
import { Settings } from '../model/settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  singleton: Settings;

  constructor() {
    this.singleton = {
      viewModes: [{
        value: 'cardView',
        label: 'Card View',
      },
      {
        value: 'tileView',
        label: 'Tile View',
      },
      {
        value: 'checkListView',
        label: 'Checklist View',
      }],
      selectedViewMode: 'tileView',
      connectors: [
        {
          connectorName: 'MonogoDB connector',
          connectorDescription: 'Connect to a mongo database (your settings are kept in local storage)',
          dbuser: '',
          dbpassword: '',
          dbhost: '',
          database: ''
        }
      ]
    };
  }

  load(): Settings {
    return this.singleton;
  }

  save(settings: Settings): void {
    this.singleton =  settings;
  }
}
