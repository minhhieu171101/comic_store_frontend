import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserModel} from "../../../models/UserModel";
import {LoginService} from "../../../core/service/login.service";
import {ComicOrderService} from "../../../core/service/comic-order.service";
import {ComicOrderModel} from "../../../models/ComicOrderModel";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

    user: UserModel = new UserModel();
    comicOrders: ComicOrderModel[] | undefined;
    totalPrice: number = 0;
    totalProduct: number = 0;

    constructor(
        private router: Router,
        private activatedRouter: ActivatedRoute,
        private loginService: LoginService,
        private comicOrderService: ComicOrderService,
        private cdr: ChangeDetectorRef
    ) {
    }

    ngOnInit() {
        const decodeToken = this.loginService.decodeToken()
        this.user.username = decodeToken?.sub;
        this.getListComicOrder();
    }

    gotoPay() {
        this.router.navigate(["/pay"]);
    }

    getListComicOrder() {
        this.comicOrderService.getComicOrders(this.user).subscribe((res: ComicOrderModel[]) => {
            this.comicOrders = res;
            this.getTotalPriceAndTotalProduct();
            this.cdr.detectChanges();
        })
    }

    getTotalPriceAndTotalProduct(): void {
        if (this.comicOrders) {
            for (const comicOrder of this.comicOrders) {
                this.totalProduct += comicOrder.quantity;
                this.totalPrice += comicOrder.totalPrice;
            }
        }
        this.cdr.detectChanges();
    }
}
