import { Injectable } from '@angular/core';
import {LoginService} from "./login.service";
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {Observable} from "rxjs";
import {ToastrService} from "ngx-toastr";
import {AUTH_REQUEST} from "../../helpers/message";

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private loginService: LoginService,
              private router: Router,
              private toaStr:ToastrService
  ) {}

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isLoggedIn()) {
      return true;
    } else {
      this.toaStr.warning(AUTH_REQUEST);
      this.router.navigate(['/login']);
      return false;
    }
  }
}
