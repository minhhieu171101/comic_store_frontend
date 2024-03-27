import { Component } from '@angular/core';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCartShopping, faHeadset, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-admin-home',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent {

  protected readonly faMagnifyingGlass = faMagnifyingGlass;
  protected readonly faHeadset = faHeadset;
  protected readonly faCartShopping = faCartShopping;
}
