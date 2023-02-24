import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CrmComponent } from './crm/crm.component';
import { ScanComponent } from './scan/scan.component';
import { ModelsModule } from '../models/models.module';

const routes : Routes = [
  {
    path: '',
    component: CrmComponent
  },
  {
    path: 'scan',
    component: ScanComponent,
    data: {animation: 'openClosePage'}
  }
]

@NgModule({
  declarations: [
    CrmComponent,
    ScanComponent
  ],
  imports: [
    CommonModule,
    ModelsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BackofficeModule { }
