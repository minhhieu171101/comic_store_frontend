import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MailModel} from "../../models/MailModel";
import {RegisterModel} from "../../models/RegisterModel";
import {LoginModel} from "../../models/LoginModel";
import {Observable} from "rxjs";
import {ResponseStringModel} from "../../models/ResponseStringModel";
import {ResponseAuthModel} from "../../models/ResponseAuthModel";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

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
}
