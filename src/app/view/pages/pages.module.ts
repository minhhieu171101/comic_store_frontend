import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {CartComponent} from "./cart/cart.component";
import {ListProductsComponent} from "./list-products/list-products.component";
import {PayComponent} from "./pay/pay.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";
import {UserComponent} from "./user/user.component";
import {FormsModule} from "@angular/forms";
import {MoreProductComponent} from "./more-product/more-product.component";
import {LoginComponent} from "./login/login.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {LoginService} from "../../core/service/login.service";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {HeaderComponent} from "../../components/header/header.component";

@NgModule({
    declarations: [
        HomeComponent,
        CartComponent,
        ListProductsComponent,
        PayComponent,
        ProductDetailComponent,
        UserComponent,
        MoreProductComponent,
        LoginComponent,
        NavbarComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        SlickCarouselModule
    ],
    providers: [
        LoginService
    ]
})
export class PagesModule { }
