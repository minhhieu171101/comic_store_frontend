import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MailModel} from "../../models/MailModel";
import {RegisterModel} from "../../models/RegisterModel";
import {LoginModel} from "../../models/LoginModel";
import {Observable} from "rxjs";
import {UserModel} from "../../models/UserModel";
import {ResponseModel} from "../../models/response/ResponseModel";
import {AuthModel} from "../../models/AuthModel";
import {Page} from "../../models/Page";

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

  sendEmail(mailModel: MailModel): Observable<ResponseModel<String>>  {
    return this.httpClient.post<ResponseModel<String>>(`${this.API}auth/send`, mailModel, this.httpOptions);
  }

  register(registerObject: RegisterModel): Observable<ResponseModel<String>>  {
    return this.httpClient.post<ResponseModel<String>>(`${this.API}auth/register`, registerObject, this.httpOptions);
  }

  login(loginObject: LoginModel): Observable<ResponseModel<AuthModel>>  {
    return this.httpClient.post<ResponseModel<AuthModel>>(`${this.API}auth/login`, loginObject, this.httpOptions);
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

  public getCurrentUserRole(): string {
    const decodeToken = this.decodeToken();
    return decodeToken?.role;
  }

  public getInfoUser(user: UserModel): Observable<ResponseModel<UserModel>> {
    return this.httpClient.post<ResponseModel<UserModel>>(`${this.API}auth/user`, user, this.httpOptions);
  }

  public getPageUserInfo(user: UserModel): Observable<Page<UserModel>> {
    return this.httpClient.post<Page<UserModel>>(`${this.API}auth/page-user`, user, this.httpOptions);
  }
}
