import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminUserPopupComponent} from "./admin-user-popup/admin-user-popup.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-admin-user',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.scss'
})
export class AdminUserComponent {

  isDialogOpen: boolean = false;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(AdminUserPopupComponent, {
      width: '500px',
      data: { /* Dữ liệu bạn muốn truyền vào pop-up */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpen = false;
      console.log('The dialog was closed');
    });
  }

}
