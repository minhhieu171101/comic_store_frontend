import {Component, OnInit} from '@angular/core';
import {UserModel} from "../../../models/UserModel";
import {ResponseModel} from "../../../models/response/ResponseModel";
import {AuthService} from "../../../core/service/auth.service";
import {ToastrService} from "ngx-toastr";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

    user: UserModel = new UserModel();

    constructor(
        private authService: AuthService,
        private toaStr: ToastrService,
        private datePipe: DatePipe
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

    updateUserInfo() {
        this.authService.updateUserInfo(this.user).subscribe((res: ResponseModel<String>) => {
            if (res.status === "OK") {
                this.toaStr.success(res.message);
                this.getUserInfo();
            } else  {
                this.toaStr.error(res.message);
            }
        })
    }
}
