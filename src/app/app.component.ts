import { Component, OnInit } from '@angular/core';
import { LightboxConfig } from 'ngx-lightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'yawgmoth';

  constructor(private lightboxConfig: LightboxConfig) {
    // override default config
    lightboxConfig.fadeDuration = 0;
  }

  ngOnInit(): void {
  }
}
