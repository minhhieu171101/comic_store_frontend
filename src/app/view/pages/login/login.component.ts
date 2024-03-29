import {Component, OnInit} from '@angular/core';
import {RegisterModel} from "../../../models/RegisterModel";
import {LoginModel} from "../../../models/LoginModel";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  // Kiểm tra đang là phần đăng nhập hay đăng ký
  isLoginForm = true;

  // Đối tượng cho việc validate form input của đăng nhập
  loginFormValid = {
    validUsername: true,
    validPass: true
  }

  // Đối tượng cho việc validate form input của đăng ký
  registerFormValid = {
    validUsernameLength: true,
    validUsernameFormat: true,
    validEmailFormat: true,
    validPhoneFormat: true,
    validPassFormat: true,
    validRePassFormat: true,
  }

  registerObject: RegisterModel = new RegisterModel();
  loginObject: LoginModel = new LoginModel();
  rePassword: string = '';

  ngOnInit(): void {
  }

  // validRegisterForm() {
  //   if ()
  // }
}
