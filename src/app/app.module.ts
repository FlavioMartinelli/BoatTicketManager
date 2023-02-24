import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatepickerComponent } from './models/components/datepicker/datepicker.component';
import { TimepickerComponent } from './models/components/timepicker/timepicker.component';
import { InputComponent } from './models/components/input/input.component';
import { SearchbarComponent } from './models/components/searchbar/searchbar.component';
import { BoatComponent } from './models/components/boat/boat.component';
import { CloseComponent } from './models/components/close/close.component';
import { TickComponent } from './models/components/tick/tick.component';
import { AnchorComponent } from './models/components/anchor/anchor.component';
import { TicketSubstractComponent } from './models/components/ticket-substract/ticket-substract.component';
import { ButtonComponent } from './models/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
