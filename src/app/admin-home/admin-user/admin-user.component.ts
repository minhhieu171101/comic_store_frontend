import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminUserPopupComponent} from "./admin-user-popup/admin-user-popup.component";
import {Router} from "@angular/router";
import {ComicService} from "../../core/service/comic.service";

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.scss'
})
export class AdminUserComponent {

  isDialogOpen: boolean = false;

  constructor(
      public dialog: MatDialog,
      private router: Router,
      private comicService: ComicService
  ) {}

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
