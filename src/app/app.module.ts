import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DeckComponent } from './components/deck/deck.component';
import { SpinnerCardComponent } from './components/spinner-card/spinner-card.component';
import { ManaComponent } from './components/mana/mana.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    SpinnerCardComponent,
    ManaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
