import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ticket-substract',
  templateUrl: './ticket-substract.component.html',
  styleUrls: ['./ticket-substract.component.scss']
})
export class TicketSubstractComponent {

  @Input() bg = "var(--primary)"

}
