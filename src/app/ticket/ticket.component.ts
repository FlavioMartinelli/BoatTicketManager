import { Component } from '@angular/core';
import { TicketData } from '../models/interfaces';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  qrData!:string;
  
  constructor(private ts:TicketService){}

  ngOnInit() {
    this.qrData = this.ts.generateTiketCryptoData(this.ticket as TicketData)
  }

  ticket = {
    id: 'AKVM5iKhk3',
    booking: {
      id: "AKVM5iKhk3",
      departure: new Date(2023, 1, 28, 12, 30),
      return: new Date(2023, 1, 28, 15, 30),
      crew: {
          user: {
            name:"Flavio Martinelli",
            email:"flaviofm99@gmail.com",
            tel:"3450163862"
          },
          extras: [
            {
              name:"Flavio Martinelli",
              email:"flaviofm99@gmail.com",
              tel:"3450163862"
            },
            {
              name:"Flavio Martinelli",
              email:"flaviofm99@gmail.com",
              tel:"3450163862"
            }
          ]
      }
    }
  }

  expanded = false
  

}
