import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {ComicService} from "../../../core/service/comic.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ComicDetailModel} from "../../../models/ComicDetailModel";
import {calculatePrice} from "../../../helpers/constants";
import {ComicOrderModel} from "../../../models/ComicOrderModel";
import {UserModel} from "../../../models/UserModel";
import {AuthService} from "../../../core/service/auth.service";
import {ResponseUserModel} from "../../../models/response/ResponseUserModel";
import {ComicOrderService} from "../../../core/service/comic-order.service";
import {ResponseStringModel} from "../../../models/response/ResponseStringModel";
import {ToastrService} from "ngx-toastr";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons/faUserPlus";
import {faTruck} from "@fortawesome/free-solid-svg-icons/faTruck";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit{
  faHeart: IconDefinition = faHeart;
  faUserPlus: IconDefinition = faUserPlus;
  faTruck: IconDefinition = faTruck;
  idComic: number | undefined;
  comicDetail: ComicDetailModel = new ComicDetailModel();
  comicOrder: ComicOrderModel = new ComicOrderModel();
  quantity: number = 1;
  protected readonly calculatePrice = calculatePrice;
  user: UserModel = new UserModel();

  constructor(
      private comicService: ComicService,
      private router: Router,
      private cdr: ChangeDetectorRef,
      private activatedRoute: ActivatedRoute,
      private authService: AuthService,
      private comicOrderService: ComicOrderService,
      private toaStr: ToastrService
  ) {
    this.activatedRoute.queryParams.subscribe((param: Params) => {
      this.idComic = param["id"];
    })
  }

  ngOnInit(): void {
    this.getDetailComic();
  }


  getDetailComic(): void {
    if (this.idComic) {
      this.comicService.getDetailComic(this.idComic).subscribe((res: ComicDetailModel): void => {
        this.comicDetail = res;
        this.cdr.detectChanges();
      })
    }
  }

  increase(): void {
    if (this.quantity < this.comicDetail.residualQuantity) {
      this.quantity++;
    }
  }

  decrease(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  validQuantity(quantity: number) {
    if (quantity > this.comicDetail.residualQuantity) {
      this.quantity = this.comicDetail.residualQuantity;
    }
  }

  // Thêm hàng vào giỏ hàng
  addToCart(comicDetail: ComicDetailModel, buyNow: boolean): void {
    this.comicOrder.quantity = this.quantity;
    this.comicOrder.comicId = comicDetail.id;
    const actualPrice = this.calculatePrice(comicDetail.price, comicDetail.sale);
    if (actualPrice !== null) {
      this.comicOrder.totalPrice = actualPrice  * this.quantity;
    }
    this.user.username = this.authService.getCurrentUserUsername();
    this.authService.getInfoUser(this.user).subscribe((res: ResponseUserModel) => {
      if (res.status === "OK") {
        this.comicOrder.userId = res.data.id;
        this.comicOrderService.createComicOrder(this.comicOrder).subscribe((res: ResponseStringModel) => {
          if (res.status === "OK" && !buyNow) {
            this.toaStr.success(res.message);
            this.quantity = 1;
            this.cdr.detectChanges();
          } else {
            this.router.navigate(["/pay"]);
          }
        })
      }
    })
  }

  gotoPay() {
    this.addToCart(this.comicDetail, true);
  }
}
