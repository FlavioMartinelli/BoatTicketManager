import { Component, forwardRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CollectionsService } from 'src/app/models/collections.service';
import { Booking, Person, Schedule, TicketData } from 'src/app/models/interfaces';
import { TicketService } from 'src/app/ticket/ticket.service';

@Component({
  selector: 'app-form-booking',
  templateUrl: './form-booking.component.html',
  styleUrls: ['./form-booking.component.scss']
})
export class FormBookingComponent {

  qrData!:string
  total = 0
  code!:string


  constructor(
    private fb:FormBuilder,
    private cs:CollectionsService,
    private ts:TicketService
    ){}

  //UI
  locked = false
  buttonExtended = false
  priceVisible = false
  ticket_sub_visible = false
  pageCount = 4 //n pagine - 1 (da 0)
  page = 0
  buttonColor = 'var(--primary)'
  buttonText = ''

  loading = false

  moveToSection(n:number) {
    if(n > this.pageCount) return
    this.pageBehaviours(n).then((res)=>{
      if(res) this.page = n
    }).catch((err)=>{
      console.log(err);
      
    })
  }

  async pageBehaviours(p:number) {
    //behaviours
    switch(p){
      case 0:
      case 1:
      case 2:
      case 3:
        break;

      case this.pageCount:
        try{
          await this.startPaymentProcess()
          alert("Payment received and ticket created!");
          
        } catch(err) {
          throw new Error("Error in the payment process")
        }
        break;

      default:
        throw new Error("Page not found")
    }


    //TOGGLES
    this.buttonExtended = p == this.pageCount - 1
    this.buttonColor = p == this.pageCount - 1 ? 'var(--secondary)' : 'var(--primary)'
    this.priceVisible = p > 1
    this.ticket_sub_visible = p == this.pageCount

    return true
  }
  nextPage() {
    this.moveToSection(this.page+1)
  }

  async startPaymentProcess() {
    this.loading = true
    //TODO: payment then create
    try{
      await this.createBookingAndTicket()
    } catch(err) {
      throw new Error("Error creating booking and ticket")
    }

    this.loading = false
  }
  
  //FORM
  form = this.fb.group({
    departure: this.fb.group({
      date: this.fb.control<Date>(new Date(), [Validators.required]),
      time: this.fb.control<Schedule>({h:9, m:0}, [Validators.required])
    }),
    return: this.fb.group({
      time: this.fb.control<Schedule>({h:10,m:0}, [Validators.required])
    }),
    crew: this.fb.group({
      user: this.fb.group({
        name: this.fb.control<string>("Flavio Martinelli", [Validators.required]),
        email: this.fb.control<string>("flaviofm99@gmail.com", [Validators.required]),
        tel: this.fb.control<string>("3450163862", [Validators.required])
      }),
      extras: this.fb.array<Person>([])
    })
  })

  getFormControl(n:string) {
    return this.form.get(n) as FormControl;
  }
  get departure() {
    return this.form.get('departure') as FormGroup;
  }
  get return() {
    return this.form.get('return') as FormGroup;
  }
  get crew() {
    return this.form.get('crew') as FormGroup;
  }
  get extras() {
    return this.form.get('crew')!.get('extras') as FormArray;
  }

  get user() {
    return this.form.get('crew')!.get('user') as FormGroup;
  }
  getControlFromGroup(n:string, g?:number) {
    const group = g == 0 ? this.departure
                        : g == 1 ? this.return
                        : g == 2 ? this.crew : null;
    if(group) {
      return group.get(n) as FormControl;
    }
    return this.getFormControl(n);
  }

  

  addCrewMember() {
    this.extras.push(this.fb.group({
      name: this.fb.control('', [Validators.required]),
      email: this.fb.control(''),
      tel: this.fb.control('')
    }));
  }

  removeCrewMember(ind=(this.crew.value.length-1)){
    this.extras.removeAt(ind)
  }

  //CHECKING TIMES
  checkAvailableTime() {
    console.log(this.departure.get('date')!.value);
  }
  checkAvailableTimeLeave() {
    console.log(this.departure.get('time')!.value);
  }

  //Submit
  async createBookingAndTicket() {
    if(this.form.valid) {
      // this.loading = true
      //BookingData -> Booking
      let departureDate = this.form.value.departure?.date!
      departureDate.setHours(this.form.value.departure?.time?.h!)
      departureDate.setMinutes(this.form.value.departure?.time?.m!)
      departureDate.setSeconds(0)
      departureDate.setMilliseconds(0)
      let returnDate = departureDate
      departureDate.setHours(this.form.value.return?.time?.h!)
      departureDate.setMinutes(this.form.value.return?.time?.m!)
      let data:Booking = {
        departure: departureDate,
        return: returnDate,
        crew: {
          user: this.form.value.crew?.user as Person,
          extras: this.form.value.crew?.extras as Person[]
        }
      }
      //add booking
      const newBooking = await this.cs.addBooking(data)
      //add ticket
      const newTicket = await this.cs.addTicket(newBooking.id)
      //generate ticket
      const dataTicket:TicketData = {
        id: newTicket.id,
        booking: newBooking
      }
      //QR
      this.code = dataTicket.id
      this.qrData = this.ts.generateTiketCryptoData(dataTicket)
      const ticketData = this.ts.readTicketData(this.qrData)
      console.log(ticketData);
    } else {
      alert("Form non valido!")
      console.log(this.form.value);
      
    }
  }

  check() {    
    console.log(this.form.value);
  }


  setExtraMembers(n:number) {
    console.log("MEMBERS", n);
    
    while(this.extras.length <= n) {
      console.log("add");
      
      this.addCrewMember()
    }
    while(this.extras.length > n-1) {
      console.log("remove");

      this.removeCrewMember()
    }
  }

}
