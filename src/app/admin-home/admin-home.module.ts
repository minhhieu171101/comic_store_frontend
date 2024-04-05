import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminUserComponent} from "./admin-user/admin-user.component";
import {AdminShopComponent} from "./admin-shop/admin-shop.component";
import {AdminDeleteComponent} from "./admin-comic/admin-delete/admin-delete.component";
import {AdminCommentComponent} from "./admin-comment/admin-comment.component";
import {AdminComicComponent} from "./admin-comic/admin-comic.component";
import {AdminComicPopupComponent} from "./admin-comic/admin-comic-popup/admin-comic-popup.component";
import {AdminUserPopupComponent} from "./admin-user/admin-user-popup/admin-user-popup.component";
import {AdminHomeComponent} from "./admin-home.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
      AdminUserComponent,
      AdminShopComponent,
      AdminDeleteComponent,
      AdminCommentComponent,
      AdminComicComponent,
      AdminComicPopupComponent,
      AdminUserPopupComponent,
      AdminHomeComponent
  ],
  imports: [
      CommonModule,
      FormsModule
  ]
})
export class AdminHomeModule { }
