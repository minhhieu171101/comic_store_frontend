import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {ComicModel} from "../../../models/ComicModel";
import {ComicService} from "../../../core/service/comic.service";
import {calculatePrice} from "../../../helpers/constants";
import {Page} from "../../../models/Page";

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

  comicsPage: Page<ComicModel> = new Page<ComicModel>();
  comicObject: ComicModel = new ComicModel();
  currentPage: number = 0;
  numberComic: number = 0;
  pageSize: number = 9;

  ngOnInit(): void {
    this.comicObject.pageSize = 9
    this.activatedRouter.queryParams.subscribe((param: Params): void => {
      this.comicObject.typeComicId = param["typeComicId"];
      this.getComics();
    })
  }

  getComics() {
    this.comicService.getListComicByType(this.comicObject).subscribe((res: Page<ComicModel>) => {
      this.comicsPage = res;
      if (res.content) {
        this.numberComic = res.content.length;
      }
      this.cdr.detectChanges();
    })
  }

  protected readonly calculatePrice = calculatePrice;

  goToDetail(id: number | null): void {
    this.router.navigate(["/more-products/detail/" + id], {
      queryParams: {
        id
      }
    });
  }

  handlePageChange(event: number) {
    this.comicObject.page = event;
    this.currentPage = event;
    this.getComics();
  }
}
