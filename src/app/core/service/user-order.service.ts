import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponseStringModel} from "../../models/response/ResponseStringModel";
import {UserOrderModel} from "../../models/UserOrderModel";

@Injectable({
  providedIn: 'root'
})
export class UserOrderService {

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

  public order(userOrder: UserOrderModel): Observable<ResponseStringModel> {
    return this.httpClient.post<ResponseStringModel>(`${this.API}user-order/order`, userOrder, this.httpOptions);
  }
}
