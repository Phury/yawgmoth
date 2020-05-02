import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LightboxModule } from 'ngx-lightbox';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { DeckListComponent } from './pages/deck-list/deck-list.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { MetaListComponent } from './pages/meta-list/meta-list.component';
import { SpinnerCardComponent } from './components/spinner-card/spinner-card.component';
import { ManaComponent } from './components/mana/mana.component';
import { DeckComponent } from './components/deck/deck.component';
import { DeckCardComponent } from './components/deck-card/deck-card.component';
import { KeyruneComponent } from './components/keyrune/keyrune.component';
import { DeckTileComponent } from './components/deck-tile/deck-tile.component';
import { CardTileComponent } from './components/card-tile/card-tile.component';
import { ToggleComponent } from './core/toggle/toggle.component';
import { CompareComponent } from './pages/compare/compare.component';
import { DropdownComponent } from './core/dropdown/dropdown.component';
import { appRouting } from './app.routing';
import { CardTableComponent } from './components/card-table/card-table.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PullOutMenuComponent } from './layouts/pull-out-menu/pull-out-menu.component';
import { ImportComponent } from './pages/import/import.component';
import { CardPillComponent } from './components/card-pill/card-pill.component';


@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    SpinnerCardComponent,
    ManaComponent,
    DeckListComponent,
    CollectionComponent,
    DefaultLayoutComponent,
    DeckCardComponent,
    NavigationComponent,
    KeyruneComponent,
    DeckTileComponent,
    CardTileComponent,
    WishListComponent,
    MetaListComponent,
    ToggleComponent,
    CompareComponent,
    DropdownComponent,
    CardTableComponent,
    SettingsComponent,
    PullOutMenuComponent,
    ImportComponent,
    CardPillComponent,
  ],
  imports: [
    RouterModule.forRoot(appRouting), //, { enableTracing: true }),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    LightboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
