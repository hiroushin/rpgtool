import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Injectable, Input, NO_ERRORS_SCHEMA, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-input-number-slide',
  imports: [
    MatSliderModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './input-number-slide.component.html',
  styleUrl: './input-number-slide.component.css'
})
export class InputNumberSlideComponent {

  @Input() value = 1
  @Input({ alias: 'maxValue' }) maxValue = NaN
  @Input({ alias: 'minValue' }) minValue = NaN
  @Output("valueEvent") event = new EventEmitter<number>();

  range = 20;
  show: boolean = false
  max: number = this.value
  min: number = this.value
  timeout: any

  updateMinMax() {
    let max = this.value + this.range
    if (!isNaN(this.maxValue) && max > this.maxValue) {
      max = this.maxValue
    }
    this.max = max
    let min = this.value - this.range
    if (!isNaN(this.minValue) && min < this.minValue) {
      min = this.minValue
    }
    this.min = min
  }

  formatSliderLabel(value: number): string {
    return `${value}`
  }

  open(event: FocusEvent) {
    this.updateMinMax()
    this.show = true
    const slider = document.querySelector("mat-slider") as HTMLInputElement;
    slider.focus()
  }

  change(event: Event) {
    if (this.timeout) clearTimeout(this.timeout)
  }

  update(event: Event) {
    this.updateMinMax()
    this.timeout = setTimeout(() => {
      this.event.emit(this.value)
      clearTimeout(this.timeout)
      this.show = false
    }, 2000)
  }
}
