import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Navigation, Params, Router} from "@angular/router";
import {ComicModel} from "../../../models/ComicModel";
import {ComicService} from "../../../core/service/comic.service";
import {calculatePrice} from "../../../helpers/constants";
import {PageComic} from "../../../models/PageComic";

@Component({
  selector: 'app-more-product',
  templateUrl: './more-product.component.html',
  styleUrl: './more-product.component.css',
})
export class MoreProductComponent implements OnInit{

  constructor(
      private router: Router,
      private comicService: ComicService,
      private activatedRouter: ActivatedRoute,
      private cdr: ChangeDetectorRef
  ) {
    this.activatedRouter.queryParams.subscribe((param: Params): void => {
      this.comicObject.typeComicId = param["typeComicId"];
    })
  }

  comics: ComicModel[] | undefined;
  comicObject: ComicModel = new ComicModel();

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.comicService.getListComicByType(this.comicObject).subscribe((res: PageComic) => {
      this.comics = res.content;
      this.cdr.detectChanges();
    })
  }

  protected readonly calculatePrice = calculatePrice;

  goToDetail(id: number | null) {
    
  }
}
