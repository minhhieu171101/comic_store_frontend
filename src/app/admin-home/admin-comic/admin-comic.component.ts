import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminComicPopupComponent} from "./admin-comic-popup/admin-comic-popup.component";
import {AdminDeleteComponent} from "./admin-delete/admin-delete.component";
import {Router} from "@angular/router";
import {ComicService} from "../../core/service/comic.service";
import {ComicModel} from "../../models/ComicModel";
import {PageComic} from "../../models/PageComic";

@Component({
  selector: 'app-admin-comic',
  templateUrl: './admin-comic.component.html',
  styleUrl: './admin-comic.component.scss'
})
export class AdminComicComponent  implements OnInit{

  isDialogOpen: boolean = false;
  comic: ComicModel = new ComicModel();
  pageComic: PageComic = new PageComic();

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private comicService: ComicService
  ) {}

  ngOnInit() {
    this.getComicAdminPage();
  }

  getComicAdminPage() {
    this.comic.pageSize = 10;
    this.comicService.getComicPageAdmin(this.comic).subscribe((res: PageComic) => {
      this.pageComic = res;
    })
  }

  openDialog(comic: ComicModel): void {
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(AdminComicPopupComponent, {
      width: '500px',
      data: comic
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpen = false;
      console.log('The dialog was closed');
    });
  }

  openDialogDelete(comic: ComicModel): void {
    this.isDialogOpen = true;
    const dialogRef = this.dialog.open(AdminDeleteComponent, {
      data: comic
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isDialogOpen = false;
      this.getComicAdminPage();
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
