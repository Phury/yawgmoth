import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/core/item';



class Settings {
  display: { viewModes: Item[], selectedView: string };
  connectors: any[];

  constructor() {
    this.display = {
      viewModes: [{
        value: 'cardView',
        label: 'Card View',
      },
      {
        value: 'tileView',
        label: 'Tile View',
      }],
      selectedView: 'cardView'
    }
    this.connectors = [
      {
        connectorName: 'MonogoDB connector',
        connectorDescription: 'Connect to a mongo database (your settings are kept in local storage)',
        dbuser: '',
        dbpassword: '',
        dbhost: '',
        database: ''
      }
    ];
  }

  toggleDisplay(evt: any): void {
    this.display.selectedView = evt;
  }
}

@Component({
  selector: 'ygm-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  settings = new Settings();

  constructor() { }

  ngOnInit(): void {
  }


}
