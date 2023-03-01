import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketPageComponent } from './ticket/ticket-page/ticket-page.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=>import('./booking/booking.module').then(m=>m.BookingModule)
  },
  {
    path: 'ticket/:id',
    component: TicketPageComponent
  },
  {
    path: 'backoffice',
    loadChildren: ()=>import('./backoffice/backoffice.module').then(m=>m.BackofficeModule)
  },
  {
    path: 'auth',
    loadChildren: ()=>import('./auth/auth.module').then(m=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
