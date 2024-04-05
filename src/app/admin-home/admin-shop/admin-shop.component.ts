import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminShopPopupComponent} from "./admin-shop-popup/admin-shop-popup.component";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-admin-shop',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './admin-shop.component.html',
  styleUrl: './admin-shop.component.scss'
})
export class AdminShopComponent {
  isDialogShopOpen: boolean = false;

  constructor(public dialog: MatDialog) {}

  openDialogShop(): void {
    this.isDialogShopOpen = true;
    const dialogRef = this.dialog.open(AdminShopPopupComponent, {
      width: '500px',
      data: { /* Dữ liệu bạn muốn truyền vào pop-up */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isDialogShopOpen = false;
      console.log('The dialog was closed');
    });
  }
}
