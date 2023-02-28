import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private as:AuthService) {}

  login(f:NgForm) {
    console.log(f.value);
    
    this.as.login(f.value).then(res=>{
      console.log(res);
    })
  }

}
