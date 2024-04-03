import {Component, OnInit} from '@angular/core';
import {
  faMagnifyingGlass,
  faHeadset,
  faCartShopping, IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {Router} from "@angular/router";
import {LoginService} from "../../core/service/login.service";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit{
  faMagnifyingGlass: IconDefinition = faMagnifyingGlass;
  faHeadset: IconDefinition = faHeadset;
  faCartShopping: IconDefinition = faCartShopping;

  isLogin: boolean = this.loginService.isLoggedIn();

  ngOnInit(): void {}

  constructor(
      private router: Router,
      private loginService: LoginService
  ) {}


  routerHome(): void {
    this.router.navigate(["/home"]);
  }

  routerLogin(): void {
    if (this.isLogin) {
      this.router.navigate(["/user"]);
    } else {
      this.router.navigate(["/login"])
    }
  }

  routerCart(): void {
    this.router.navigate(["/cart"]);
  }

  signOut(): void {
    localStorage.clear();
    this.setLogin(false);
    this.router.navigate(["/login"])
  }

  setLogin(isLogin: boolean): void {
    this.isLogin = isLogin;
  }
}
