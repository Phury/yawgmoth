import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';
import { Settings } from 'src/app/model/settings';

@Component({
  selector: 'ygm-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent implements OnInit {
  settings: Settings;

  constructor(private settingsService: SettingsService) { }

  ngOnInit(): void {
    this.settings = this.settingsService.load();
  }

  onSave(): void {
    this.settingsService.save(this.settings);
  }

  onViewModeChange(evt: any): void {
    console.log(evt);
  }
}
