import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Dice, DiceResponse } from '../core/dice.rules';
import { PopupComponent } from '../popup/popup.component';
import { InputNumberSlideComponent } from '../input-number-slide/input-number-slide.component';

@Component({
  selector: 'app-dice',
  imports: [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatTableModule,
    InputNumberSlideComponent,
  ],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.css'
})
export class DiceComponent implements OnInit {

  list: Array<any> = [
    { faces: 4, length: 1, bonus: 0 },
    { faces: 6, length: 1, bonus: 0 },
    { faces: 8, length: 1, bonus: 0 },
    { faces: 10, length: 1, bonus: 0 },
    { faces: 12, length: 1, bonus: 0 }
  ]
  d20 = { bonus: 0 }
  name: string = ''
  dialog = inject(MatDialog);

  displayedColumns: string[] = ['dice', 'result', 'results'];
  dataSource: DiceResponse[] = [];

  ngOnInit() {
    Dice._log.subscribe(log => {
      this.dataSource = log;
    })
    this.dataSource = Dice.getLog();
  }

  updateLength(item:any, value:number) {
    item.length = value;
  }

  updateBonus(item:any, value:number) {
    item.bonus = value;
  }

  clearLog() {
    Dice.clearLog()
  }

  results(data: any) {
    this.dialog.open(PopupComponent, {
      data: data,
    });
  }

  roll(faces: number, bonus?: number) {
    let result = Dice.roll(faces)
    result.value += bonus || 0
    this.results(result)
  }
  rollSum(faces: number, length: number, bonus?: number) {
    let result = Dice.rollSum(faces, length)
    result.value += bonus || 0
    this.results(result)
  }
  rollMin(faces: number, bonus?: number) {
    let result = Dice.rollMin(faces)
    result.value += bonus || 0
    this.results(result)
  }
  rollMax(faces: number, bonus?: number) {
    let result = Dice.rollMax(faces)
    result.value += bonus || 0
    this.results(result)
  }

  formatSliderLabel(value: number): string {
    return `${value}`;
  }

}
