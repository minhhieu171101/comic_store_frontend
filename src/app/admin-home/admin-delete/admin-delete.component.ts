import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-admin-delete',
  standalone: true,
  imports: [],
  templateUrl: './admin-delete.component.html',
  styleUrl: './admin-delete.component.scss'
})
export class AdminDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<AdminDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
