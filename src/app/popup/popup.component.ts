import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';

@Component({
  selector: 'app-popup',
  imports: [MatDialogTitle, MatDialogContent],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  data = inject(MAT_DIALOG_DATA);
}
