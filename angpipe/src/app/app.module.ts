import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavoriteFilterPipe } from './favorite-filter.pipe';
import { CurrencyPipe } from './currency.pipe';
import { FrcurrencyPipe } from './frcurrency.pipe';
import { FrnumPipe } from './frnum.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FavoriteFilterPipe,
    CurrencyPipe,
    FrcurrencyPipe,
    FrnumPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
