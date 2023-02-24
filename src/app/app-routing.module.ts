import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>import('./booking/booking.module').then(m=>m.BookingModule)
  },
  {
    path: 'ticket',
    component: TicketComponent
  },
  {
    path: 'backoffice',
    loadChildren: ()=>import('./backoffice/backoffice.module').then(m=>m.BackofficeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
