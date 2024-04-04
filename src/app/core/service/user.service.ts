import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ResponseUserModel} from "../../models/response/ResponseUserModel";
import {Observable} from "rxjs";
import {UserModel} from "../../models/UserModel";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API: string = "http://localhost:8080/api/";

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

  public getInfoUser(user: UserModel): Observable<ResponseUserModel> {
    return this.httpClient.post<ResponseUserModel>(`${this.API}auth/user`, user, this.httpOptions);
  }
}
