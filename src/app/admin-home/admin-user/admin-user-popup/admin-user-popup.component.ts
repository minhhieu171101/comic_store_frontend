import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-user-popup',
  templateUrl: './admin-user-popup.component.html',
  styleUrl: './admin-user-popup.component.scss'
})
export class AdminUserPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<AdminUserPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
