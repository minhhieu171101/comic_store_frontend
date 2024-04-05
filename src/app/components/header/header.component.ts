import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {
  faMagnifyingGlass,
  faHeadset,
  faCartShopping, IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {NavigationEnd, Router} from "@angular/router";
import {LoginService} from "../../core/service/login.service";
import {UserModel} from "../../models/UserModel";
import {UserService} from "../../core/service/user.service";
import {ResponseUserModel} from "../../models/response/ResponseUserModel";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit{
  faMagnifyingGlass: IconDefinition = faMagnifyingGlass;
  faHeadset: IconDefinition = faHeadset;
  faCartShopping: IconDefinition = faCartShopping;
  isLogin: boolean | undefined;
  userObject: UserModel = new UserModel();

  constructor(
      private router: Router,
      private loginService: LoginService,
      private userService: UserService,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isLogin = this.loginService.isLoggedIn();
        if (this.isLogin) {
          this.getUserInfo();
        }
        this.cdr.detectChanges();
      }
    })
  }


  routerHome(): void {
    this.router.navigate(["/home"]);
  }

  getUserInfo(): void {
    const decodeTokenValue = this.loginService.decodeToken();
    this.userObject.username = decodeTokenValue?.sub;
    this.userService.getInfoUser(this.userObject).subscribe((res: ResponseUserModel): void => {
      this.userObject = res.data;
      this.cdr.detectChanges();
    })
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
    this.cdr.detectChanges();
  }
}
