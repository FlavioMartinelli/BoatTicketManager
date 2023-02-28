import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';
import { LoginData } from '../models/interfaces'

import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData:Observable<firebase.User|null>;

  constructor(private auth:AngularFireAuth) {
    this.userData = auth.authState
  }

  login(data:LoginData) {
    return this.auth.signInWithEmailAndPassword(data.email, data.password).then(res=>{
      console.log("auth", res);
      return res
    }).catch(err=>{
      console.log(err);
    })
  }

  signup() {
    return this.auth.signOut().then(res=>{
      console.log("signout", res);
    }).catch(err=>{
      console.log(err);
    })
  }
}
