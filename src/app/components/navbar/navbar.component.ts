import {Component, OnInit} from '@angular/core';
import {
  faBars,
  faCaretDown,
  faBookOpen,
  faAngleRight, IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit{
  faBars: IconDefinition = faBars;
  faCaretDown: IconDefinition = faCaretDown;
  faBookOpen: IconDefinition = faBookOpen;
  faAngleRight: IconDefinition = faAngleRight;
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  ngOnInit() {
  }

  slickInit(event: any): void {
    console.log('Slick initialized');
  }

  breakpoint(event: any): void {
    console.log('Slick initialized');
  }
  afterChange(event: any) {
    console.log('Slick initialized');
  }
  beforeChange(event: any) {
    console.log('Slick initialized');
  }
}
