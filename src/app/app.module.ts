import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { SpinnerCardComponent } from './components/spinner-card/spinner-card.component';
import { ManaComponent } from './components/mana/mana.component';
import { DeckComponent } from './components/deck/deck.component';
import { DeckListComponent } from './components/deck-list/deck-list.component';
import { CollectionComponent } from './components/collection/collection.component';
import { DeckCardComponent } from './components/deck-card/deck-card.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';

const appRoutes: Routes = [
  //{ path: 'decks/:id',      component: HeroDetailComponent },
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
    data: { title: 'Your collection' },
    children: [
      { path: '', component: CollectionComponent },
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
    NavigationComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes), //, { enableTracing: true }),
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
