import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminShopPopupComponent} from "./admin-shop-popup/admin-shop-popup.component";
import {NgClass} from "@angular/common";
import {Router} from "@angular/router";
import {ComicService} from "../../core/service/comic.service";

@Component({
  selector: 'app-admin-shop',
  templateUrl: './admin-shop.component.html',
  styleUrl: './admin-shop.component.scss'
})
export class AdminShopComponent {
  isDialogShopOpen: boolean = false;

  constructor(
      public dialog: MatDialog,
      private router: Router,
      private comicService: ComicService
  ) {}

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


  routerHomeAdmin(): void {
    this.router.navigate(["/admin-home"]);
  }

  routerComicAdmin(): void {
    this.router.navigate(["/admin-comic"]);
  }

  routerUserAdmin(): void {
    this.router.navigate(["/admin-user"]);
  }

  routerCommentAdmin(): void {
    this.router.navigate(["/admin-comment"]);
  }

  routerShopAdmin(): void {
    this.router.navigate(["/admin-shop"]);
  }
}
