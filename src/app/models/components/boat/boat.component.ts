import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss']
})
export class BoatComponent {


  @Input() active = false;
}
