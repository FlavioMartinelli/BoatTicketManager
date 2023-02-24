import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private r:Router){}

  openSun = false

  bookNow() {
    this.openSun = true
    setTimeout(()=>{
      this.r.navigateByUrl("/booking")
    },1000)
  }

}
