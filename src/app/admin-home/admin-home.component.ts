import {Component, OnInit} from '@angular/core';
import {faCartShopping, faHeadset, faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {ComicOrderService} from "../core/service/comic-order.service";
import {StatisticComicModel} from "../models/StatisticComicModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css'
})
export class AdminHomeComponent implements OnInit{

  protected readonly faMagnifyingGlass = faMagnifyingGlass;
  protected readonly faHeadset = faHeadset;
  protected readonly faCartShopping = faCartShopping;
  statisticComics: StatisticComicModel[] | undefined;
  totalMonthIncome: number = 0;

  constructor(
      private comicOrderService: ComicOrderService,
      private router: Router
  ) {
  }

  ngOnInit() {
    this.getStatistic();
  }

  getStatistic() {
    this.comicOrderService.getStatisticComic().subscribe((res: StatisticComicModel[]) => {
      this.statisticComics = res;
      for (let comic of this.statisticComics) {
        this.totalMonthIncome += comic.totalIncome;
      }
    })
  }

  toProductManagement() {
    this.router.navigate(["/admin-comic"])
  }

  routerHomeAdmin(): void {
    this.router.navigate(["/admin-home"]);
  }

  routerComicAdmin(): void {
    this.router.navigate(["/admin-comic"]);
  }

  routerUserAdmin(): void {
    this.router.navigate(["/admin-user"]);
  }

  routerCommentAdmin(): void {
    this.router.navigate(["/admin-comment"]);
  }

  routerShopAdmin(): void {
    this.router.navigate(["/admin-shop"]);
  }
}
