import { Component } from '@angular/core';
import { LoadingService } from './models/components/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TicketManager';

  loading = false

  constructor(private ls:LoadingService){}

  ngOnInit() {
    this.ls.loadingObs.subscribe((res)=>{
      this.loading = res
    })
  }
}
