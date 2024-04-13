import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {PagesModule} from "../pages.module";

@Component({
  selector: 'app-user-shop',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        PagesModule,
        ReactiveFormsModule
    ],
  templateUrl: './user-shop.component.html',
  styleUrl: './user-shop.component.scss'
})
export class UserShopComponent {

}
