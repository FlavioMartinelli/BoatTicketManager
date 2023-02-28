import { Component, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgModel, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-slider-input',
  templateUrl: './slider-input.component.html',
  styleUrls: ['./slider-input.component.scss']
})
export class SliderInputComponent {

  @Input() required = false
  @Input() label = "label"
  @Input() min = 0
  @Input() max = 10

  value:number = 1

  setValue(n:string) {
    this.value = Number.parseInt(n)
  }

  @Output() valueChanged = new EventEmitter<number>()

  get valueList() {
    let numbers = Array(this.max+1).keys()

    return Array.from(numbers).slice(this.min)
  }

  get selectorTranslate() {
    let res = `translateX(${(100 / ((this.max-this.min)+1)) * this.value}%)`
    console.log(res);
    
    return res;
    return "translateX(0)"
  }


  trigger() {
    console.log("TRIGGER");
    
    this.valueChanged.emit(this.value)
  }


}
