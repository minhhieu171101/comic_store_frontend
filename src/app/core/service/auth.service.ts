import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MailModel} from "../../models/MailModel";
import {RegisterModel} from "../../models/RegisterModel";
import {LoginModel} from "../../models/LoginModel";
import {Observable} from "rxjs";
import {ResponseStringModel} from "../../models/response/ResponseStringModel";
import {ResponseAuthModel} from "../../models/response/ResponseAuthModel";
import {UserModel} from "../../models/UserModel";
import {ResponseUserModel} from "../../models/response/ResponseUserModel";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API: string = "http://localhost:8080/api/";
  private tokenName: string = "comicshop"

  private httpOptions = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    }),
  };

  constructor(
     private httpClient: HttpClient
  ) { }

  sendEmail(mailModel: MailModel): Observable<ResponseStringModel>  {
    return this.httpClient.post<ResponseStringModel>(`${this.API}auth/send`, mailModel, this.httpOptions);
  }

  register(registerObject: RegisterModel): Observable<ResponseStringModel>  {
    return this.httpClient.post<ResponseStringModel>(`${this.API}auth/register`, registerObject, this.httpOptions);
  }

  login(loginObject: LoginModel): Observable<ResponseAuthModel>  {
    return this.httpClient.post<ResponseAuthModel>(`${this.API}auth/login`, loginObject, this.httpOptions);
  }

  public isLoggedIn(): boolean {
    let token: string | null = localStorage.getItem(this.tokenName);
    return token != null && token.length > 0;
  }

  public decodeToken() {
    const token: string | null = localStorage.getItem(this.tokenName);
    try {
      if (token !== null) {
        return JSON.parse(atob(token.split('.')[1]));
      }
      return null;
    } catch (error) {
      return null;
    }
  }

  public getCurrentUserUsername(): string {
    const decodeToken = this.decodeToken();
    return decodeToken?.sub;
  }

  public getInfoUser(user: UserModel): Observable<ResponseUserModel> {
    return this.httpClient.post<ResponseUserModel>(`${this.API}auth/user`, user, this.httpOptions);
  }
}
