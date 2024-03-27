import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './view/product-detail/product-detail.component';
import { HomeComponent } from './view/home/home.component';
import { MoreProductComponent } from './view/more-product/more-product.component';
import { CartComponent } from './view/cart/cart.component';
import { AdminHomeComponent} from "./admin-home/admin-home.component";
import { UserComponent} from "./view/user/user.component";
import {PayComponent} from "./view/pay/pay.component";

export const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomeComponent },
      { path: 'detail/:id', component: ProductDetailComponent },
      { path: 'cart', component: CartComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'more-products',
    children: [
      {
        path: 'detail/:id',
        component: ProductDetailComponent,
      },
      { path: '', component: MoreProductComponent },
    ],
  },
  {path: 'admin-home', component: AdminHomeComponent},
  {path: 'user', component: UserComponent},
  {path: 'pay', component: PayComponent},

];
