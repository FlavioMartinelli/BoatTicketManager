import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent {

  admin = false
  ticketId!:string

  constructor(private ar : ActivatedRoute){}

  ngOnInit() {
    this.ar.params.subscribe(p=>{
      this.ticketId = p['id']
      console.log(this.ticketId);
    })
  }
}
