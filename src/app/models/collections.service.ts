import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { map, take, tap } from 'rxjs';
import { Booking, FirebaseTimestamp, FireBooking, Ticket } from './interfaces';

@Injectable({
  providedIn: 'root'
})
export class CollectionsService {
  
  constructor(private afs:AngularFirestore) { }

  //FIREBASE

  private getFireData<T>(collection:AngularFirestoreCollection<T>) {
    return collection.snapshotChanges().pipe(map(res=>{
      return res.map(action => {
        let data = action.payload.doc.data() as T
        const id = action.payload.doc.id;
        return {id, ...data} as T
      })
    }))
  }
  
  //BOOKINGS
  
  private get bookings(){
    return this.afs.collection<Booking|FireBooking>('booking')
  }
  
  private get fireBookings() {
    // return this.bookings.valueChanges()
    return this.bookings.snapshotChanges().pipe(map(res=>{
      return res.map(action => {
        let data = action.payload.doc.data() as FireBooking
        const id = action.payload.doc.id;
        return {id, ...data} as FireBooking
      })
    }))
  }

  getBookings() {
    console.log("GETTING ALL FIRE BOOKINGS");
    return this.fireBookings.pipe(map(res=>this.convertFireBookingData(res)))
  }
  
  getFireBookingById(id:string) {
    console.log("GETTING FIRE BOOKING " + id);
    return this.bookings.valueChanges({id: id}).pipe(map(res=>res[0] as FireBooking))
  }

  getBookingById(id:string) {
    return this.getFireBookingById(id).pipe(map(res=>this.convertFireToBooking(res)))
  }

  async addToCollection<T>(res:AngularFirestoreCollection<T>, data:T) {
    const id = this.afs.createId()
    await res.doc(id).set({id, ...data})
    return {id, ...data}
  }
  
  addBooking(b:Booking) {
    return this.addToCollection<Booking>(this.bookings as AngularFirestoreCollection<Booking>, b)
  }
  addFireBooking(b:FireBooking) {
    return this.addToCollection<FireBooking>(this.bookings as AngularFirestoreCollection<FireBooking>, b)
  }

  //CONVERTES - Booking
  private convertFireBookingData(data:FireBooking[]): Booking[] {
    return data.map(e=>this.convertFireToBooking(e))
  }
  private convertBookingData(data:Booking[]): FireBooking[] {
    return data.map(e=>this.convertBookingToFire(e))
  }

  private convertFireToBooking(b:FireBooking):Booking{
    return {...b, departure: new Date(b.departure.seconds * 1000), return: new Date(b.return.seconds * 1000)}
  }
  private convertBookingToFire(b:Booking):FireBooking{
    let res:any = {...b}
    res.departure = Math.round(b.departure.getTime()/1000)
    res.return = Math.round(b.return.getTime()/1000)
    return res as FireBooking
  }

    //TICKETS
    private get tickets() {
      return this.afs.collection<Ticket>('tickets')
    }

    getTickets() {
      console.log("GETTING ALL TICKETS");
      return this.getFireData(this.tickets)
    }



    getTicketById(id:string) {
      console.log("GETTING TICKET " + id);
      
      return this.tickets.valueChanges({id: id}).pipe(map(res=>{
        console.log(res);
        
        return res[0]
      }))
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
  