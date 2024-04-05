import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {ComicService} from "../../core/service/comic.service";

@Component({
  selector: 'app-admin-comment',
  templateUrl: './admin-comment.component.html',
  styleUrl: './admin-comment.component.scss'
})
export class AdminCommentComponent {

  constructor(
      public dialog: MatDialog,
      private router: Router,
      private comicService: ComicService
  ) {}


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
