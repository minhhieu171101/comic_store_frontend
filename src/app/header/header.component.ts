import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMagnifyingGlass,
  faHeadset,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit{
  faMagnifyingGlass = faMagnifyingGlass;
  faHeadset = faHeadset;
  faCartShopping = faCartShopping;

  ngOnInit(): void {
  }
}
