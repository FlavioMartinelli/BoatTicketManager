import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-page-admin',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageAdminComponent {

  admin = true
  ticketId!:string

  constructor(private ar : ActivatedRoute){}

  ngOnInit() {
    this.ar.params.subscribe(p=>{
      this.ticketId = p['id']
    })
  }

}
