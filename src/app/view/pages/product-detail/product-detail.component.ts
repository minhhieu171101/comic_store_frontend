import { Component } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
// import { faUserPlus, faTruck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  faHeart = faHeart;
  // faUserPlus = faUserPlus;
  // faTruck = faTruck;
}
