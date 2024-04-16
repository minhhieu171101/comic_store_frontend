import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {AuthService} from "../../core/service/auth.service";
import {UserModel} from "../../models/UserModel";
import {Page} from "../../models/Page";

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrl: './admin-user.component.scss'
})
export class AdminUserComponent implements OnInit{

  user: UserModel = new UserModel();
  pageUser: Page<UserModel> = new Page<UserModel>();
  currentPage: number = 0;
  numberUser: number = 0;
  pageSize: number = 0;

  constructor(
      public dialog: MatDialog,
      private router: Router,
      private authService: AuthService
  ) {}

  ngOnInit() {
    this.user.pageSize = 1;
    this.pageSize = 1;
    this.getPageUserInfo();
  }

  getPageUserInfo() {
    this.authService.getPageUserInfo(this.user).subscribe((res: Page<UserModel>) => {
      this.pageUser = res;
      if (res.content) {
        this.numberUser = res.content.length;
      }
    })
  }

  handlePageChange(event: number) {
    this.user.page = event;
    this.currentPage = event;
    this.getPageUserInfo();
  }
}
