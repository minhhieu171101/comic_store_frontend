import {Component, OnInit} from '@angular/core';
import {
  faMagnifyingGlass,
  faHeadset,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit{
  faMagnifyingGlass = faMagnifyingGlass;
  faHeadset = faHeadset;
  faCartShopping = faCartShopping;

  ngOnInit(): void {}

  constructor(
      private router: Router
  ) {}


  routerHome(): void {
    this.router.navigateByUrl("/home");
  }

  routerLogin(): void {
    this.router.navigateByUrl("/login");
  }

  routerCart() {
    this.router.navigateByUrl("/cart");
  }
}
