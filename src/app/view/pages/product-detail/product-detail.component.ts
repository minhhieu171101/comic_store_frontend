import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";
import {ComicService} from "../../../core/service/comic.service";
import {ActivatedRoute, Navigation, Params, Router} from "@angular/router";
import {ComicDetailModel} from "../../../models/ComicDetailModel";
import {calculatePrice} from "../../../helpers/constants";
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit{
  faHeart: IconDefinition = faHeart;
  idComic: number | undefined;
  comicDetail: ComicDetailModel = new ComicDetailModel();
  protected readonly calculatePrice = calculatePrice;

  ngOnInit(): void {
    this.getDetailComic();
  }

  constructor(
      private comicService: ComicService,
      private router: Router,
      private cdr: ChangeDetectorRef,
      private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((param: Params) => {
      this.idComic = param["idComic"];
    })
  }

  getDetailComic(): void {
    this.comicService.getDetailComic(this.idComic).subscribe((res: ComicDetailModel): void => {
      this.comicDetail = res;
      this.cdr.detectChanges();
    })
  }
}
