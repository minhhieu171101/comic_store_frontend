import {Component, OnInit} from '@angular/core';
import {faAnglesRight, IconDefinition} from '@fortawesome/free-solid-svg-icons';
import {ListProductService} from "../../../core/service/list-product.service";
import {ComicModel} from "../../../models/ComicModel";
import {ActivatedRoute, NavigationExtras, Router} from "@angular/router";
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
      private listProductService: ListProductService,
      private router: Router
  ) {}

  ngOnInit(): void {
    this.getListComic();
  }

  getListComic(): void {
    this.listProductService
        .getListComicLandingPage(this.page, this.pageSize)
        .subscribe((res: ComicModel[]): void => {
      this.comics = res;
    })
  }

  calculatePrice(price: number | null, sale: number | null): number | null {
    if (price !== null && sale !== null) {
      return price * (100 - sale) / 100;
    }
    return price;
  }

  viewMore() {
    const navigationExtras: NavigationExtras = {
      state: {
        data: null
      }
    };
    this.router.navigate(["/more-products"], navigationExtras);
  }
}
