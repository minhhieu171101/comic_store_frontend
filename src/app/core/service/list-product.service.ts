import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ComicModel} from "../../models/ComicModel";

@Injectable({
  providedIn: 'root'
})
export class ListProductService {

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
  
  getListComicLandingPage(page: number, pageSize: number): Observable<ComicModel[]> {
    return this.httpClient.get<ComicModel[]>(`${this.API}comic/list-comic/${page}/${pageSize}`);
  }
}
