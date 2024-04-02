import {Component, OnInit} from '@angular/core';
import {
  faBars,
  faCaretDown,
  faBookOpen,
  faAngleRight, IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import {NavbarService} from "../../core/service/navbar.service";
import {TypeComic} from "../../models/TypeComic";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit{
  faBars: IconDefinition = faBars;
  faCaretDown: IconDefinition = faCaretDown;
  faBookOpen: IconDefinition = faBookOpen;
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  typeComics: TypeComic[] | undefined;

  listImageSlide: string[] = [
    "../../assets/images/slide-1.jpg",
    "../../assets/images/slide-1.jpg",
    "../../assets/images/slide-1.jpg"
  ]

  listImageQC: string[] = [
    "../../assets/images/qc-1.jpg",
    "../../assets/images/qc-1.jpg",
    "../../assets/images/qc-1.jpg"
  ]

  ngOnInit(): void {
    this.navbarService.getListTypeComic().subscribe((res: TypeComic[]) => {
      this.typeComics = res;
    })
  }

  constructor(
      private navbarService: NavbarService
  ) {
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
