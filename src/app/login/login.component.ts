import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
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
    validUsername: true,
    validEmail: true,
    validPhone: true,
    validPass: true,
    validRePass: true,
  }

  ngOnInit(): void {
  }


}
