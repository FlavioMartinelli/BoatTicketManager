import { Component, EventEmitter, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Schedule } from '../../interfaces';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(()=>TimepickerComponent)
    }
  ]

})
export class TimepickerComponent implements ControlValueAccessor {

  @Input() times:Schedule[] =[
    {h:9, m:0, available: true},
    {h:10, m:0, available: true},
    {h:11, m:0, available: true},
    {h:12, m:0, available: true},
    {h:13, m:0, available: true},
    {h:14, m:0, available: true},
    {h:15, m:0, available: true},
    {h:16, m:0, available: true},
    {h:17, m:0, available: true}
  ]

  value:Schedule = this.times[0];

  change = new EventEmitter<Schedule>()

  onChange = (v:Schedule) =>{}
  onTouched = ()=>{}

  touched = false

  writeValue(obj: Schedule): void {
    
    this.value = {...obj}
    console.log(this.value);
    
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

  select(t:Schedule) {
    this.value = t
    this.change.emit(t)
    this.touched = true
    this.onTouched()
  }

}
