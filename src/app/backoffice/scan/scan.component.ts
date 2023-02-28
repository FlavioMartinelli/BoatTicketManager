import { Component } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';
import { TicketService } from 'src/app/ticket/ticket.service';


@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent {

  constructor(private ts:TicketService){}

  //SCANNER
  allowedFormats = [BarcodeFormat.QR_CODE]
  handleScanSuccess(e:string){
    console.log(e);
    const ticketData = this.ts.readTicketData(e)
    console.log(ticketData);
    
  }
  handleCamerasNotFound(e:any) {
    console.warn(e);
  }

}
