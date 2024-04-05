import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-comic-popup',
  standalone: true,
  imports: [],
  templateUrl: './admin-comic-popup.component.html',
  styleUrl: './admin-comic-popup.component.scss'
})
export class AdminComicPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<AdminComicPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
