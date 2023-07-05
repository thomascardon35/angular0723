import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TotalComponent } from './total/total.component';
import { CountelemComponent } from './countelem/countelem.component';

@NgModule({
  declarations: [
    AppComponent,
    TotalComponent,
    CountelemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
