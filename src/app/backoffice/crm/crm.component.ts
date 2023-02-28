import { Component } from '@angular/core';
import { CollectionsService } from 'src/app/models/collections.service';
import { Booking, FirebaseTimestamp } from 'src/app/models/interfaces';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.scss']
})
export class CrmComponent {

  bookings:Booking[] = []

  constructor(private cs:CollectionsService) {}

  ngOnInit() {
    this.cs.getBookings().subscribe(res=>{
      console.log(res);
      this.bookings = this.cs.convertBookingData(res)
    })
  }

  testAdd() {
    let demoBooking = {
      departure: new Date(2023, 5, 6, 14, 30, 0 ,0),
      return: new Date(2023, 5, 6, 18, 30, 0, 0),
      crew: {
        user: {
          name: "Flavio",
          email: "flaviofm99@gmail.com",
          tel: "3450163862"
        },
        extras: [
          {
            name: "Rago",
            email: "giorago@gmail.com",
            tel: "3333333333"
          },
          {
            name: "Giovanni",
            email: "giorago@gmail.com",
            tel: "3333333333"
          }
        ]
      }
    }
    this.cs.addBooking(demoBooking).then(res=>{
      console.log(res);
    })
  }

}
