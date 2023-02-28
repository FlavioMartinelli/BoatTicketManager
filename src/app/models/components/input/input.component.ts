import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(()=>InputComponent)
    }
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() type = "text"
  @Input() required = false
  @Input() label = "label"


  value = "Test"
  touched = false

  onChange = (v:string) =>{}
  onTouched = ()=>{}

  writeValue(obj: string): void {
    this.value = obj
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log("NO DISABLED");
  }

  input(v:string) {
    this.value = v
    this.onChange(v)
    this.touched = true
    this.onTouched()
  }

}
