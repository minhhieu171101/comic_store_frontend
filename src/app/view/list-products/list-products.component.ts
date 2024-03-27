import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css',
})
export class ListProductsComponent {
  faAnglesRight = faAnglesRight;
}
