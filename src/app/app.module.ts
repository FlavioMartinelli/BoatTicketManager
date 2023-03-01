import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire/compat';
import { enviroment } from './enviroments/enviroment';
import { ExportAsModule } from 'ngx-export-as';
import { LoadingComponent } from './models/components/loading/loading.component';
import { TicketPageComponent } from './ticket/ticket-page/ticket-page.component';
import { ModelsModule } from './models/models.module';
import { TicketPageAdminComponent } from './ticket/ticket-page/ticket-page-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    TicketPageComponent,
    TicketPageAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(enviroment.firebaseConfig),
    ExportAsModule,
    ModelsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
