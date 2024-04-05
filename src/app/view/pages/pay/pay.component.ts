import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserModel} from "../../../models/UserModel";
import {ComicOrderModel} from "../../../models/ComicOrderModel";
import {UserOrderModel} from "../../../models/UserOrderModel";
import {AuthService} from "../../../core/service/auth.service";
import {ResponseUserModel} from "../../../models/response/ResponseUserModel";
import {ComicOrderService} from "../../../core/service/comic-order.service";
import {UserOrderService} from "../../../core/service/user-order.service";
import {ResponseStringModel} from "../../../models/response/ResponseStringModel";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrl: './pay.component.scss'
})
export class PayComponent implements OnInit{

  user: UserModel = new UserModel();
  comicOrders: ComicOrderModel[] | undefined;
  userOrder: UserOrderModel = new UserOrderModel();
  totalPrice: number = 0;
  totalProduct: number = 0;

  constructor(
      private router: Router,
      private authService: AuthService,
      private cdr: ChangeDetectorRef,
      private comicOrderService: ComicOrderService,
      private userOrderService: UserOrderService,
      private toaStr: ToastrService
  ) {
  }

  ngOnInit() {
    const decodeToken = this.authService.decodeToken()
    this.user.username = decodeToken?.sub;
    this.getUserInfo();
    this.getListComicOrder();
  }

  //  lấy thông tin người dùng
  getUserInfo(): void {
    this.user.username = this.authService.getCurrentUserUsername();
    this.authService.getInfoUser(this.user).subscribe((res: ResponseUserModel): void => {
      this.user = res.data;
      this.userOrder.userId = res.data.id;
      this.cdr.detectChanges();
    })
  }

  //  lấy danh sách id của từng hàng trong giỏ hàng
  getListIdUserModel() {
    if (this.comicOrders) {
      for (const comicOrder of this.comicOrders) {
        if (comicOrder.comicOrderId !== null) {
          this.userOrder.comicOrders?.push(...this.userOrder.comicOrders, comicOrder.comicOrderId);
        }
      }
    }
  }

  // lấy danh sách hàng trong giở hàng
  getListComicOrder() {
    this.comicOrderService.getComicOrders(this.user).subscribe((res: ComicOrderModel[]) => {
      this.comicOrders = res;
      this.getListIdUserModel();
      this.getTotalPriceAndTotalProduct();
      this.cdr.detectChanges();
    })
  }

  //  lấy tổng giá và tổng sản phẩm của các hàng trong giỏ hàng
  getTotalPriceAndTotalProduct(): void {
    if (this.comicOrders) {
      for (const comicOrder of this.comicOrders) {
        this.totalProduct += comicOrder.quantity;
        this.totalPrice += comicOrder.totalPrice;
      }
    }
    this.cdr.detectChanges();
  }

  order() {
    console.log(this.userOrder)
    this.userOrderService.order(this.userOrder).subscribe((res: ResponseStringModel) => {
      if (res.status === "OK") {
        this.toaStr.success(res.message);
        this.router.navigate(["/home"]);
      }
    })
  }
}
