import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import { Booking, FirebaseTimestamp, Ticket } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  
  constructor(private afs:AngularFirestore) { }
  
  //BOOKINGS
  
  get bookings(){
    return this.afs.collection<Booking>('booking')
  }
  
  getBookings() {
    // return this.bookings.valueChanges()
    return this.bookings.snapshotChanges().pipe(map(res=>{
      return res.map(action => {
        let data = action.payload.doc.data() as Booking
        const id = action.payload.doc.id;
        return {id, ...data} as Booking
      })
    }))
  }
  
  getBookingById(id:string) {
    return this.bookings.valueChanges({id: id})
  }

  async addToCollection<T>(res:AngularFirestoreCollection<T>, data:T) {
    const id = this.afs.createId()
    await res.doc(id).set({id, ...data})
    return {id, ...data}
  }
  
  addBooking(b:Booking) {
    return this.addToCollection<Booking>(this.bookings, b)
  }

    convertBookingData(data:Booking[]): Booking[] {
      return data.map(e=>({...e, departure: new Date((e.departure as FirebaseTimestamp).seconds * 1000), return: new Date((e.return as FirebaseTimestamp).seconds * 1000)}))
    }


    //TICKETS
    get tickets() {
      return this.afs.collection<Ticket>('tickets')
    }

    addTicket(idBooking: string) {
      let data:Ticket = {
        booking: idBooking,
        validations: {
          departure: false,
          return: false
        }
      }
      return this.addToCollection<Ticket>(this.tickets, data)
    }
  }
  