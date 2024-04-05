import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AdminShopPopupComponent} from "./admin-shop-popup/admin-shop-popup.component";
import {NgClass} from "@angular/common";
import {Router} from "@angular/router";
import {ComicService} from "../../core/service/comic.service";
import {UserOrderService} from "../../core/service/user-order.service";
import {PurchaseOrderModel} from "../../models/PurchaseOrderModel";
import {Page} from "../../models/Page";

@Component({
  selector: 'app-admin-shop',
  templateUrl: './admin-shop.component.html',
  styleUrl: './admin-shop.component.scss'
})
export class AdminShopComponent implements OnInit{
  isDialogShopOpen: boolean = false;
  purchaseOrder: PurchaseOrderModel = new PurchaseOrderModel();
  purchasePage: Page<PurchaseOrderModel> = new Page<PurchaseOrderModel>();
  currentPage: number = 0;
  numberPurchase: number = 0;
  pageSize: number = 0;

  constructor(
      public dialog: MatDialog,
      private router: Router,
      private userOrderService: UserOrderService
  ) {}

  ngOnInit() {
    this.purchaseOrder.pageSize = 10;
    this.pageSize = 10;
    this.getPurchaseOrderPage();
  }

  getPurchaseOrderPage() {
    this.userOrderService.getPurchaseOrderPage(this.purchaseOrder).subscribe((res: Page<PurchaseOrderModel>) => {
      this.purchasePage = res;
      if (res.content) {
        this.numberPurchase = res.content.length;
      }
    })
  }

  openDialogShop(): void {
    this.isDialogShopOpen = true;
    const dialogRef = this.dialog.open(AdminShopPopupComponent, {
      width: '500px',
      data: { /* Dữ liệu bạn muốn truyền vào pop-up */ }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.isDialogShopOpen = false;
      console.log('The dialog was closed');
    });
  }

  handlePageChange(event: number) {
    this.currentPage =  event;
    this.purchaseOrder.page = event;
    this.getPurchaseOrderPage();
  }
}
