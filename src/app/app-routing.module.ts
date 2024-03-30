import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./view/pages/home/home.component";
import {LoginComponent} from "./view/pages/login/login.component";
import {ProductDetailComponent} from "./view/pages/product-detail/product-detail.component";
import {MoreProductComponent} from "./view/pages/more-product/more-product.component";
import {AdminHomeComponent} from "./admin-home/admin-home.component";
import {UserComponent} from "./view/pages/user/user.component";
import {PayComponent} from "./view/pages/pay/pay.component";
import {CartComponent} from "./view/pages/cart/cart.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
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
  {path: 'cart', component: CartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
