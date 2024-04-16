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
import {AuthService} from "../../core/service/auth.service";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {SlickCarouselModule} from "ngx-slick-carousel";
import {WishlistComponent} from "./wishlist/wishlist.component";
import {PaginationComponent} from "../../components/pagination/pagination.component";
import {ComponentsModule} from "../../components/components.module";

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
        WishlistComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
        SlickCarouselModule,
        ComponentsModule
    ],
    providers: [
        AuthService
    ]
})
export class PagesModule { }
