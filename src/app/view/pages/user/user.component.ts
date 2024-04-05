import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserModel} from "../../../models/UserModel";
import {UserService} from "../../../core/service/user.service";
import {ResponseUserModel} from "../../../models/response/ResponseUserModel";
import {LoginService} from "../../../core/service/login.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

    user: UserModel = new UserModel();

    constructor(
        private userService: UserService,
        private loginService: LoginService
    ) {
    }

    ngOnInit(): void {
        this.getUserInfo();
    }

    getUserInfo(): void {
        const decodeTokenValue = this.loginService.decodeToken();
        this.user.username = decodeTokenValue?.sub;
        this.userService.getInfoUser(this.user).subscribe((res: ResponseUserModel): void => {
            this.user = res.data;
        })
    }

}
