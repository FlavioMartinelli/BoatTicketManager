import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss']
})
export class ButtonComponent {
  @Input() text = "button"
  @Input() icon = "bi-chevron-right"
  @Input() extended = false
  //TODO: mettere ng-content

  @Input() bg = "var(--secondary)"

  @Output() clickEvent = new EventEmitter<never>()

  click(){
    this.clickEvent.emit()
  }

}

