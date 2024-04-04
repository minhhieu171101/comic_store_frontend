import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {faAnglesRight, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {ComicService} from "../../../core/service/comic.service";
import {ComicModel} from "../../../models/ComicModel";
import {NavigationExtras, Router} from "@angular/router";
import {calculatePrice} from "../../../helpers/constants";
@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss',
})
export class ListProductsComponent implements OnInit{
  faAnglesRight: IconDefinition = faAnglesRight;
  page: number = 0;
  pageSize: number = 9;
  comics: ComicModel[] | undefined;

  constructor(
      private listProductService: ComicService,
      private router: Router,
      private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getListComic();
  }

  getListComic(): void {
    this.listProductService
        .getListComicLandingPage(this.page, this.pageSize)
        .subscribe((res: ComicModel[]): void => {
      this.comics = res;
      this.cdr.detectChanges();
    })
  }

  viewMore(): void {
    this.router.navigate(["/more-products"], {
      queryParams: {
        data: null
      }
    });
  }

  goToDetail(id: number | null): void {const navigationExtras: NavigationExtras = {
    state: {
      idComic: id
    }
  };
    this.router.navigate(["/more-products/detail/" + id], navigationExtras);
  }

  protected readonly calculatePrice = calculatePrice;
}
