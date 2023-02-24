import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './booking/booking.component';
import { TicketComponent } from '../ticket/ticket.component';
import { RouterModule, Routes } from '@angular/router';
import { ModelsModule } from '../models/models.module';

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
    TicketComponent
  ],
  imports: [
    CommonModule,
    ModelsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BookingModule { }
