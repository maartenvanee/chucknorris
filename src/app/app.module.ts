import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChucknorrisComponent } from './chucknorris/chucknorris.component';

@NgModule({
  declarations: [
    AppComponent,
    ChucknorrisComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
