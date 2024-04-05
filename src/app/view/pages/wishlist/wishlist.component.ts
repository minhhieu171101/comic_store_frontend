import {Component, OnInit} from '@angular/core';
import {WishlistService} from "../../../core/service/wishlist.service";
import {ToastrService} from "ngx-toastr";
import {WishlistModel} from "../../../models/WishlistModel";
import {Page} from "../../../models/Page";
import {UserModel} from "../../../models/UserModel";
import {AuthService} from "../../../core/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})
export class WishlistComponent implements OnInit{

  wishModel: WishlistModel = new WishlistModel();
  wishPage: Page<WishlistModel> = new Page<WishlistModel>();
  user: UserModel = new UserModel();
  currentPage: number = 0;
  numberWish: number = 0;
  pageSize: number = 0;

  constructor(
      private wishlistService: WishlistService,
      private toaStr: ToastrService,
      private authService: AuthService,
      private router: Router
  ) {
  }

  ngOnInit() {
    this.wishModel.pageSize = 9;
    this.pageSize = 9;
    this.getWishlistPage();
  }

  getWishlistPage() {
    this.user.username = this.authService.getCurrentUserUsername();
    this.wishModel.username = this.user.username;
    this.wishlistService.getWishlistPage(this.wishModel).subscribe((res: Page<WishlistModel>) => {
      this.wishPage = res;
      if (res.content) {
        this.numberWish = res.content.length;
      }
    })
  }

  goToDetail(id: number | null): void {
    this.router.navigate(["/more-products/detail/" + id], {
      queryParams: {
        id
      }
    });
  }

  handlePageChange(event: number) {
    this.wishModel.page = event;
    this.currentPage = event;
    this.getWishlistPage();
  }
}
