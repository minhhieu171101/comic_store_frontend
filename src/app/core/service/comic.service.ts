import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {ComicModel} from "../../models/ComicModel";
import {ComicDetailModel} from "../../models/ComicDetailModel";
import {Page} from "../../models/Page";
import {ResponseModel} from "../../models/response/ResponseModel";

@Injectable({
  providedIn: 'root'
})
export class ComicService {

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
  
  getListComicLandingPage(comic: ComicModel): Observable<ComicModel[]> {
    return this.httpClient.post<ComicModel[]>(`${this.API}comic/list-comic`, comic, this.httpOptions);
  }
  
  getDetailComic(id: number): Observable<ComicDetailModel> {
    return this.httpClient.get<ComicDetailModel>(`${this.API}comic/detail/${id}`);
  }

  getListComicByType(comic: ComicModel): Observable<Page<ComicModel>> {
    return this.httpClient.post<Page<ComicModel>>(`${this.API}comic/page-comic`, comic, this.httpOptions);
  }

  getComicPageAdmin(comic: ComicModel): Observable<Page<ComicModel>> {
    return this.httpClient.post<Page<ComicModel>>(`${this.API}comic/comic-management-admin`, comic, this.httpOptions);
  }

  updateComic(comic: ComicModel): Observable<ResponseModel<String>> {
    return this.httpClient.post<ResponseModel<String>>(`${this.API}comic/update-comic`, comic, this.httpOptions)
  }

  deleteComic(comic: ComicModel): Observable<ResponseModel<String>> {
    return this.httpClient.post<ResponseModel<String>>(`${this.API}comic/delete-comic`, comic, this.httpOptions)
  }
}
