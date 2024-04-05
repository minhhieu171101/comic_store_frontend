import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ComicOrderModel} from "../../models/ComicOrderModel";
import {UserModel} from "../../models/UserModel";
import {ResponseStringModel} from "../../models/response/ResponseStringModel";
import {StatisticComicModel} from "../../models/StatisticComicModel";

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

  createComicOrder(comicOrder: ComicOrderModel): Observable<ResponseStringModel> {
    return this.httpClient.post<ResponseStringModel>(`${this.API}comic-order/create-order`, comicOrder, this.httpOptions)
  }

  deleteComicOrder(comicOrder: ComicOrderModel): Observable<ResponseStringModel> {
    return this.httpClient.post<ResponseStringModel>(`${this.API}comic-order/delete`, comicOrder, this.httpOptions)
  }

  getStatisticComic(): Observable<StatisticComicModel[]> {
    return this.httpClient.get<StatisticComicModel[]>(`${this.API}comic-order/statistic`)
  }
}
