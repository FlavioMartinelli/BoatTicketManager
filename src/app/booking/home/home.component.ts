import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Schedule } from 'src/app/models/interfaces';
import { TicketService } from 'src/app/ticket/ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  countdown = {
    m: 0,
    s: 0
  }
  
  countdownInterval:any;

  departures:Schedule[] = [
    {h:9, m:0, available: true},
    {h:10, m:0, available: false},
    {h:11, m:0, available: true},
    {h:12, m:0, available: false},
    {h:13, m:0, available: true},
    {h:14, m:0, available: false},
    {h:15, m:0, available: true},
    {h:16, m:0, available: false},
    {h:17, m:0, available: true}
  ]

  get todayDate() {
    const now = new Date();
    return `${now.getDate()}-${now.getMonth()}-${now.getFullYear()}`
  }
  get todayTime() {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}`
  }
  get today() {
    const now = new Date();
    return {
      date: this.todayDate,
      time: {
        hour: now.getHours(),
        minutes: now.getSeconds(),
        seconds: now.getSeconds()
      }
    }
  }

  get nextDeparture() {
    let res = this.departures.find(t=>{
      return !(t.h < this.today.time.hour || t.h == this.today.time.hour && t.m < this.today.time.minutes) && t.available
    })
    // if(res) clearInterval(this.countdownInterval)
    return res ? res : {h:-1,m:0}
  }

  constructor(private r:Router, private ts:TicketService){}


  openSun = false

  bookNow() {
    this.openSun = true
    setTimeout(()=>{
      this.r.navigateByUrl("/booking")
    },1500)
  }

  ngOnInit(){
    //COUNTDOWN
    this.resetCountdown()
    
    this.countdownInterval = setInterval(()=>{
      if(this.countdown.s > 0) {
        this.countdown.s -= 1
        return
      } else {
        if(this.countdown.m > 0) {
          this.countdown.s = 59
          this.countdown.m -= 1
        } else {
          this.resetCountdown()
        }
      }
    }, 1000)
  }

  ngOnDestroy() {
    clearInterval(this.countdownInterval)
  }

  resetCountdown() {
    let start = new Date()
    let end = new Date()
    end.setHours(this.nextDeparture.h)
    end.setMinutes(this.nextDeparture.m)
    end.setSeconds(0)
    
    const differenza = Math.round((end.getTime() - start.getTime())/1000)
    
    this.countdown = {
      m: Math.floor(differenza / 60),
      s: differenza -( Math.floor(differenza / 60) * 60)
    }
  }


}
