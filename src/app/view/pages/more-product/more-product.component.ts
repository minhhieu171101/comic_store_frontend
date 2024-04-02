import {Component, OnInit} from '@angular/core';
import {Navigation, Router} from "@angular/router";

@Component({
  selector: 'app-more-product',
  templateUrl: './more-product.component.html',
  styleUrl: './more-product.component.css',
})
export class MoreProductComponent implements OnInit{

  constructor(
      private router: Router
  ) {}

  ngOnInit(): void {
    const currentState: Navigation | null = this.router.lastSuccessfulNavigation;
    console.log(currentState?.extras)
  }
}
