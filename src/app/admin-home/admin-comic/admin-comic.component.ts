import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminComicPopupComponent} from "./admin-comic-popup/admin-comic-popup.component";
import {AdminDeleteComponent} from "./admin-delete/admin-delete.component";
import {Router} from "@angular/router";
import {ComicService} from "../../core/service/comic.service";
import {ComicModel} from "../../models/ComicModel";
import {Page} from "../../models/Page";

@Component({
  selector: 'app-admin-comic',
  templateUrl: './admin-comic.component.html',
  styleUrl: './admin-comic.component.scss'
})
export class AdminComicComponent  implements OnInit{

  isDialogOpen: boolean = false;
  comic: ComicModel = new ComicModel();
  pageComic: Page<ComicModel> = new Page<ComicModel>();
  currentPage: number = 0;
  numberComic: number = 0;
  pageSize: number = 0;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private comicService: ComicService
  ) {}

  ngOnInit() {
    this.comic.pageSize = 1;
    this.pageSize = 1;
    this.getComicAdminPage();
  }

  getComicAdminPage() {
    this.comicService.getComicPageAdmin(this.comic).subscribe((res: Page<ComicModel>) => {
      this.pageComic = res;
      if (res.content) {
        this.numberComic = res.content.length;
      }
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

  handlePageChange(event: any) {
    this.comic.page = event;
    this.getComicAdminPage();
  }
}
