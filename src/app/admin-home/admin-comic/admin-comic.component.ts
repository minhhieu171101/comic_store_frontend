import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {AdminComicPopupComponent} from "./admin-comic-popup/admin-comic-popup.component";
import {NgClass} from "@angular/common";
import {AdminDeleteComponent} from "../admin-delete/admin-delete.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-comic',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './admin-comic.component.html',
  styleUrl: './admin-comic.component.scss'
})
export class AdminComicComponent {

  isDialogOpen: boolean = false;

  constructor(
    public dialog: MatDialog,
    private router: Router,) {}

  openDialog(): void {
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(AdminComicPopupComponent, {
      width: '500px',
      data: { /* Dữ liệu bạn muốn truyền vào pop-up */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpen = false;
      console.log('The dialog was closed');
    });
  }

  openDialogDelete(): void {
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(AdminDeleteComponent, {
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
    this.router.navigate(["/admin-home"]);
  }

  routerUserAdmin(): void {
    this.router.navigate(["/admin-home"]);
  }

  routerCommentAdmin(): void {
    this.router.navigate(["/admin-home"]);
  }

  routerShopAdmin(): void {
    this.router.navigate(["/admin-home"]);
  }
}
