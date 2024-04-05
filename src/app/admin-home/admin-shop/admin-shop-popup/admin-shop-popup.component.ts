import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-shop-popup',
  standalone: true,
  imports: [],
  templateUrl: './admin-shop-popup.component.html',
  styleUrl: './admin-shop-popup.component.scss'
})
export class AdminShopPopupComponent {
  constructor(
    public dialogRef: MatDialogRef<AdminShopPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
