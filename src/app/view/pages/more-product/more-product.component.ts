import {Component, OnInit} from '@angular/core';
import {Navigation, Router} from "@angular/router";
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
      private comicService: ComicService
  ) {}

  comics: ComicModel[] | undefined;
  comicObject: ComicModel = new ComicModel();

  ngOnInit(): void {
    const currentState: Navigation | null = this.router.getCurrentNavigation();
    if (currentState?.extras
        && currentState?.extras.state
        && currentState?.extras.state['typeComicId']) {
      this.comicObject.typeComicId = currentState?.extras.state['typeComicId'];
      this.getComics();
    }
  }

  getComics() {
    this.comicService.getListComicByType(this.comicObject).subscribe((res: PageComic) => {
      this.comics = res.content;
    })
  }

  protected readonly calculatePrice = calculatePrice;

  goToDetail(id: number | null) {
    
  }
}
