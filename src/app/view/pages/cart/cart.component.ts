import {ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserModel} from "../../../models/UserModel";
import {AuthService} from "../../../core/service/auth.service";
import {ComicOrderService} from "../../../core/service/comic-order.service";
import {ComicOrderModel} from "../../../models/ComicOrderModel";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {ResponseModel} from "../../../models/response/ResponseModel";

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
    comicOrderDelete: ComicOrderModel = new ComicOrderModel();
    @ViewChild("deletePopup") deletePopup !: TemplateRef<any>;
    deleteTemplatePopup: MatDialogRef<TemplateRef<any>> | undefined;

    constructor(
        private router: Router,
        private activatedRouter: ActivatedRoute,
        private authService: AuthService,
        private comicOrderService: ComicOrderService,
        private cdr: ChangeDetectorRef,
        private dialog: MatDialog,
        private toaStr: ToastrService
    ) {
    }

    ngOnInit() {
        const decodeToken = this.authService.decodeToken()
        this.user.username = decodeToken?.sub;
        this.getListComicOrder();
    }

    gotoPay() {
        this.router.navigate(["/pay"]);
    }

    getListComicOrder() {
        this.comicOrderService
            .getComicOrders(this.user)
            .subscribe((res: ComicOrderModel[]) => {
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

    goToDetail(id: number | null): void {
        this.router.navigate(["/more-products/detail/" + id], {
            queryParams: {
                id
            }
        });
    }

    openDeletePopup(comicOrderId: number | null) {
        if (comicOrderId !== null) {
            this.comicOrderDelete.comicOrderId = comicOrderId;
            this.deleteTemplatePopup = this.dialog.open(this.deletePopup, {
                width: "400px",
                height: "208px"
            })
        }
    }

    closeDialog() {
        this.dialog.closeAll();
    }

    // xóa sản phẩm trong giỏ hàng
    delete() {
        this.comicOrderService
            .deleteComicOrder(this.comicOrderDelete)
            .subscribe((res: ResponseModel<String>) => {
            if (res.status === "OK") {
                this.toaStr.success(res.message);
                this.dialog.closeAll();
                this.comicOrderDelete.comicOrderId = null;
                this.totalProduct = 0;
                this.totalPrice = 0;
                this.getListComicOrder();
            } else {
                this.toaStr.error(res.message);
            }
        })
    }
}
