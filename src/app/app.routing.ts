import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { DeckListComponent } from './pages/deck-list/deck-list.component';
import { DeckComponent } from './components/deck/deck.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { WishListComponent } from './pages/wish-list/wish-list.component';
import { MetaListComponent } from './pages/meta-list/meta-list.component';
import { CompareComponent } from './pages/compare/compare.component';
import { SettingsComponent } from './pages/settings/settings.component';

export const appRouting: Routes = [
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
    path: 'settings',
    component: DefaultLayoutComponent,
    data: { title: 'User settings' },
    children: [
      { path: '', component: SettingsComponent },
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
    path: 'compare/:id',
    component: DefaultLayoutComponent,
    data: { title: 'Compare decks' },
    children: [
      { path: '', component: CompareComponent },
    ]
  },
  {path: 'compare', redirectTo: 'compare/', pathMatch: 'full'},
  {
    path: '',
    redirectTo: '/decks',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];