import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoombaComponent } from './roomba/roomba.component';
import { RoombaGridComponent } from './roomba-grid/roomba-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    RoombaComponent,
    RoombaGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
