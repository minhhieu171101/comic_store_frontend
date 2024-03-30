import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MailModel} from "../../models/MailModel";
import {RegisterModel} from "../../models/RegisterModel";
import {LoginModel} from "../../models/LoginModel";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private API: string = "localhost:4200/api/"

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

  sendEmail(mailModel: MailModel): any  {
    this.httpClient.post<any>(`${this.API}auth/send`, mailModel, this.httpOptions);
  }

  register(registerObject: RegisterModel): any {
    this.httpClient.post<any>(`${this.API}auth/register`, registerObject, this.httpOptions);
  }

  login(loginObject: LoginModel): any {
    this.httpClient.post<any>(`${this.API}auth/login`, loginObject, this.httpOptions);
  }
}
