import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { TicketComponent } from '../ticket/ticket.component';
import { RouterModule, Routes } from '@angular/router';
import { ModelsModule } from '../models/models.module';
import { FormBookingComponent } from './form-booking/form-booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { QRCodeComponent, QRCodeModule } from 'angularx-qrcode';

const routes : Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'booking',
    component: BookingComponent
  },
  {
    path: 'ticket',
    component: TicketComponent
  },
]


@NgModule({
  declarations: [
    HomeComponent,
    BookingComponent,
    // TicketComponent,
    FormBookingComponent
  ],
  imports: [
    CommonModule,
    ModelsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule,
    // QRCodeModule //TODO - non in app module
  ],
  exports: [
    RouterModule
  ]
})
export class BookingModule { }
