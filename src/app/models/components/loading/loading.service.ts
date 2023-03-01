import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  sub = new BehaviorSubject<boolean>(false)
  loadingObs = this.sub.asObservable()

  loading = false

  constructor() { }

  toggleLoading() {
    this.setLoading(!this.loading)
  }

  setLoading(l:boolean) {
    this.loading = l
    this.sub.next(this.loading)
  }
}
