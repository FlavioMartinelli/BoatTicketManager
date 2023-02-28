import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { enviroment } from '../enviroments/enviroment';
import { CollectionsService } from '../models/collections.service';
import { Booking, TicketData } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  

  
  constructor(private cs:CollectionsService ) {
  }

  //TICKET DATA
  generateTiketCryptoData(data:TicketData) {
    return this.encryptData(data)
  }

  getTicketByID(id:string) {
    return this.cs.getBookingById(id)
  }

  readTicketData(data:string):TicketData {
    return JSON.parse(this.decryptData(data))
  }
  
  //CRYPTO
  key = enviroment.enck
  _key = CryptoJS.enc.Utf8.parse(this.key)
  _iv = CryptoJS.enc.Utf8.parse(this.key)

  encryptData(data:any) {
    return CryptoJS.AES.encrypt(
      JSON.stringify(data), this.key, {
        keySize: 16,
        iv: this._iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }
    ).toString()
  }

  decryptData(data:string) {
    return CryptoJS.AES.decrypt(
      data, this.key, {
        keySize: 16,
        iv: this._iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      }
    ).toString(CryptoJS.enc.Utf8)
    
  }
}
