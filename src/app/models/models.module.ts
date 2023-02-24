import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { InputComponent } from './components/input/input.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { BoatComponent } from './components/boat/boat.component';
import { CloseComponent } from './components/close/close.component';
import { TickComponent } from './components/tick/tick.component';
import { AnchorComponent } from './components/anchor/anchor.component';
import { TicketSubstractComponent } from './components/ticket-substract/ticket-substract.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    DatepickerComponent,
    TimepickerComponent,
    InputComponent,
    SearchbarComponent,
    BoatComponent,
    CloseComponent,
    TickComponent,
    AnchorComponent,
    TicketSubstractComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    TimepickerComponent,
    InputComponent,
    SearchbarComponent,
    BoatComponent,
    CloseComponent,
    TickComponent,
    AnchorComponent,
    TicketSubstractComponent,
    ButtonComponent
  ]
})
export class ModelsModule { }
