import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ComicOrderModel} from "../../models/ComicOrderModel";
import {UserModel} from "../../models/UserModel";

@Injectable({
  providedIn: 'root'
})
export class ComicOrderService {

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

  getComicOrders(user: UserModel): Observable<ComicOrderModel[]> {
    return this.httpClient.post<ComicOrderModel[]>(`${this.API}comic-order/order-list`, user, this.httpOptions);
  }
}
