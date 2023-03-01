import { Component, Input } from '@angular/core';
import { ExportAsConfig, ExportAsService } from 'ngx-export-as';
import { catchError } from 'rxjs';
import { LoadingService } from '../models/components/loading/loading.service';
import { Ticket, TicketData } from '../models/interfaces';
import { TicketService } from './ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {

  qrData!:string;
  expanded = false

  exportHide = false

  @Input() superadmin = false
  
  constructor(private ts:TicketService, private exp:ExportAsService, private ls:LoadingService){}

  @Input() ticketId!:string;
  ticket!:TicketData

  defaultData:TicketData = {
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

  ngOnInit() {
    this.ls.setLoading(true)
    if(!!this.ticketId){
      console.log("TICKET INPUT - research");
      
      this.ts.getTicketDataByID(this.ticketId).subscribe(res=>{
        this.ticket = res
        this.ls.setLoading(false)
        this.qrData = this.ts.generateTiketCryptoData(this.ticket)
      })
    } else { 
        console.log("NO TICKET INPUT");
        this.ls.setLoading(false)
        this.ticket = this.defaultData //TODO: rimuovere
        this.qrData = this.ts.generateTiketCryptoData(this.ticket)
    }


  }


  //DOWNLOAD
  exportConfig:ExportAsConfig = {
    type: 'png',
    elementIdOrContent: 'ticket'
  }

  download() {
    // this.expanded = true
    // this.ls.setLoading(true)

    this.exportHide = true

    const exportFn = ()=>{
      this.exp.save(this.exportConfig, 'Ticket#'+this.ticket.id).subscribe(res=>{
        console.log("SAVE");
        console.log(res);

        this.exportHide = false
        this.ls.setLoading(false)
      })
    }
    setTimeout(exportFn, 2000)
  }

  //VALIDATION

  validate(v:boolean) {

  }

  deleteTicket() {}

}
