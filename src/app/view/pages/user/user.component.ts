import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../../models/UserModel";
import {ResponseModel} from "../../../models/response/ResponseModel";
import {AuthService} from "../../../core/service/auth.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

    user: UserModel = new UserModel();

    constructor(
        private authService: AuthService
    ) {
    }

    ngOnInit(): void {
        this.getUserInfo();
    }

    getUserInfo(): void {
        this.user.username = this.authService.getCurrentUserUsername();
        this.authService.getInfoUser(this.user).subscribe((res: ResponseModel<UserModel>): void => {
            if (res.data !== null) {
                this.user = res.data;
            }
        })
    }

}
