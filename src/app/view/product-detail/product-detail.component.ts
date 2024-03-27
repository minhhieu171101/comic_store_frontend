import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUserPlus, faTruck } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
  faHeart = faHeart;
  faUserPlus = faUserPlus;
  faTruck = faTruck;
}
