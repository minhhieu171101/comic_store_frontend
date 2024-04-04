import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

    constructor(
        private router: Router,
        private activatedRouter: ActivatedRoute
    ) {

    }

    ngOnInit() {
    }

    gotoPay() {
        this.router.navigate(["/pay"]);
    }
}
