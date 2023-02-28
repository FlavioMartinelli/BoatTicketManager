import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(()=>DatepickerComponent)
    }
  ]
})
export class DatepickerComponent implements ControlValueAccessor {
  
  
  
  // CONTROL VALUE ACCESSOR
  value:Date = new Date()

  @Output() change = new EventEmitter<Date>()

  onChange = (d:Date)=>{
  }
  onTouched = ()=>{}

  touched = false;
  // disabled = false;

  writeValue(obj: Date): void {
    // console.log("write", obj);
    this.value = new Date(obj.getTime())
    this.currentNavigation = new Date(obj.getTime())
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }
  setDisabledState?(isDisabled: boolean): void {
    console.log("NO DISABLE");
    
  }

  //NAVIGATION AND TOOLS
  currentNavigation = new Date(this.value.getTime())

  nextMonth(){
    this.currentNavigation = new Date(this.currentNavigation.getFullYear(), this.currentNavigation.getMonth() + 1, this.currentNavigation.getDate())
    
  }
  prevMonth(){
    this.currentNavigation = new Date(this.currentNavigation.getFullYear(), this.currentNavigation.getMonth() - 1, this.currentNavigation.getDate())
  }

  get daysInMonth() {
    const checkDate = new Date(this.currentNavigation.getFullYear(), this.currentNavigation.getMonth()+1,0)
    return {days: checkDate.getDate()+1, startsFrom: checkDate.getDay()}
  }

  get daysArray() {
    const a = Array.from(Array(this.daysInMonth.days).keys())
    const missing = Array(this.daysInMonth.startsFrom-1).fill(null)
    let tolast = 0
    while((a.length + missing.length + tolast) % 7 != 0) {
      tolast++
    }
    return [...missing, ...a,...Array(tolast).fill(null)]
  }


  isCurrentDay(n:number) {
    return (this.currentNavigation.getMonth() == this.value.getMonth())
    && (this.currentNavigation.getFullYear() == this.value.getFullYear()
    && n == this.value.getDate())
  }

  selectDay(n:number) {
    this.currentNavigation.setDate(n)
    this.value = new Date(this.currentNavigation.getTime())
    this.onChange(this.value);
    this.change.emit(this.value);
    this.touched = true
    this.onTouched()
  }
}
