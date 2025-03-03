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
    { faces: 4, length: 1 },
    { faces: 6, length: 1 },
    { faces: 8, length: 1 },
    { faces: 10, length: 1 },
    { faces: 12, length: 1 }
  ]
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

  updateList(item:any, value:number) {
    item.length = value;
  }

  clearLog() {
    Dice.clearLog()
  }

  results(data: any) {
    console.log(data)
    this.dialog.open(PopupComponent, {
      data: data,
    });
  }

  roll(faces: number) {
    this.results(Dice.roll(faces))
  }
  rollSum(faces: number, length: number) {
    this.results(Dice.rollSum(faces, length))
  }
  rollMin(faces: number) {
    this.results(Dice.rollMin(faces))
  }
  rollMax(faces: number) {
    this.results(Dice.rollMax(faces))
  }

  formatSliderLabel(value: number): string {
    return `${value}`;
  }

}
