import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

const appRoutes: Routes = [
  // { path: 'decks/:id',      component: HeroDetailComponent },
  {
    path: 'decks',
    component: DefaultLayoutComponent,
    data: { title: 'Your decks' },
    children: [
      { path: '', component: DeckListComponent },
    ]
  },
  {
    path: 'decks/:id',
    component: DefaultLayoutComponent,
    data: { title: 'Deck details' },
    children: [
    { path: '', component: DeckComponent },
    ]
  },
  {
    path: 'collection',
    component: DefaultLayoutComponent,
    data: { title: 'Your cards' },
    children: [
      { path: '', component: CollectionComponent },
    ]
  },
  {
    path: 'wishlist',
    component: DefaultLayoutComponent,
    data: { title: 'Your wishlist' },
    children: [
      { path: '', component: WishListComponent },
    ]
  },
  {
    path: 'meta',
    component: DefaultLayoutComponent,
    data: { title: 'Mtg metagame' },
    children: [
      { path: '', component: MetaListComponent },
    ]
  },
  {
    path: 'compare',
    component: DefaultLayoutComponent,
    data: { title: 'Compare decks' },
    children: [
      { path: '', component: CompareComponent },
    ]
  },
  {
    path: '',
    redirectTo: '/decks',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];

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
    DropdownComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes), //, { enableTracing: true }),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
