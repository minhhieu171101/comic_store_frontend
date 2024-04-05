import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs';
import {LoginService} from "../core/service/login.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) { }

  intercept(
      request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.loginService.isLoggedIn()) {
      let newRequest: HttpRequest<any> = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem("comicshop")}`,
        },
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
