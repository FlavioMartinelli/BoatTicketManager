import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';

import { AngularFireAuthModule } from '@angular/fire/compat/auth'
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: '',
    component: LoginComponent
  }
]



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    RouterModule.forChild(routes),

    AngularFireAuthModule
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
