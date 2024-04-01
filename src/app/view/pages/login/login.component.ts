import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {RegisterModel} from "../../../models/RegisterModel";
import {LoginModel} from "../../../models/LoginModel";
import {Router} from "@angular/router";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  // Kiểm tra đang là phần đăng nhập hay đăng ký
  isLoginForm: boolean  = true;

  // Đối tượng cho việc validate form input của đăng nhập
  loginFormValid = {
    validUsernameLength: true,
    validUsernameFormat: true,
    validPassLength: true,
    validPassFormat: true
  }

  // Đối tượng cho việc validate form input của đăng ký
  registerFormValid = {
    validUsernameLength: true,
    validUsernameFormat: true,
    validEmailFormat: true,
    validPhoneFormat: true,
    validPassFormat: true,
    validPassLength: true,
    validRePassFormat: true,
  }

  registerObject: RegisterModel = new RegisterModel();
  loginObject: LoginModel = new LoginModel();
  rePassword: string = '';

  code: string[] = [];
  currentIndexCode: number = 0;

  @ViewChild("validPopup") validTemplate !: TemplateRef<any>;
  validTemplatePopup: MatDialogRef<TemplateRef<any>> | undefined;

  numericPattern: string = '^[0-9]*$';

  ngOnInit(): void {}

  constructor(
      private router: Router,
      // private toaStr: ToastrService,
      private dialog: MatDialog
  ) {
  }

  // validRegisterForm() {
  //   if ()
  // }
  onRegister(): void {
    this.openValidPopup();
  }

  onLogin(): void {
    this.validateLoginForm();
  }

  // Kiểm tra giá trị trong login form
  validateLoginForm(): boolean {
    const lenUsername: number = this.loginObject.username.trim().length;
    const lenPass: number = this.loginObject.password.trim().length;
    let isPassValidate: boolean = true;

    if (lenUsername > 30 || lenUsername <= 0) {
      this.loginFormValid.validPassLength = false;
      isPassValidate = false;
    }

    if (lenPass < 8) {
      this.loginFormValid.validPassLength = false;
      isPassValidate = false;
    }

    return isPassValidate;
  }

  // Kiểm tra giá trị trong form đăng ký
  validateRegisterForm(): boolean {
    const lenUsername: number = this.registerObject.username.trim().length;
    const lenPass: number = this.registerObject.password.trim().length;
    const lenEmail: number = this.registerObject.email.trim().length;
    const lenPhone: number = this.registerObject.phone.trim().length;
    let isPassValidate: boolean = true;

    if (lenUsername > 30 || lenUsername <= 0) {
      this.registerFormValid.validUsernameLength = false;
      isPassValidate = false;
    }

    if (lenPass < 8) {
      this.registerFormValid.validPassLength = false;
      isPassValidate = false;
    }

    if (lenEmail > 50 || lenEmail <= 0) {
      this.registerFormValid.validEmailFormat = false;
      isPassValidate = false;
    }

    if (lenPhone !== 10) {
      this.registerFormValid.validPhoneFormat = false;
      isPassValidate = false;
    }

    if (this.rePassword !== this.registerObject.password) {
      this.registerFormValid.validRePassFormat = false;
      isPassValidate = false;
    }
    return isPassValidate;
  }

  resetRegisterValidForm(): void {
    this.registerFormValid.validUsernameFormat = true;
    this.registerFormValid.validUsernameLength = true;
    this.registerFormValid.validEmailFormat = true;
    this.registerFormValid.validPhoneFormat = true;
    this.registerFormValid.validPassFormat = true;
    this.registerFormValid.validPassLength = true;
    this.registerFormValid.validRePassFormat = true;
  }

  resetLoginValidForm(): void {
    this.loginFormValid.validUsernameFormat = true;
    this.loginFormValid.validUsernameLength = true;
    this.loginFormValid.validPassFormat = true;
    this.loginFormValid.validPassLength = true;
  }

  toLoginForm(toLoginForm: boolean): void {
    this.isLoginForm = toLoginForm;
    if (toLoginForm) {
      this.resetRegisterValidForm();
    } else {
      this.resetLoginValidForm();
    }
  }

  openValidPopup(): void {
    this.validTemplatePopup = this.dialog.open(this.validTemplate, {
      width: '400px',
      height: '248px',
      panelClass: 'validPopup',
    });
  }

  focusNext(event: KeyboardEvent): void {
    // kiểm tra nếu giá trị nhập là số thì thực hiện tự động dịch chuyển ô focus
    if (this.currentIndexCode < 5
        && event.keyCode >= 29
        && event.keyCode <= 57) {

      let nextInput: HTMLElement | null = document.getElementById("code" + (this.currentIndexCode + 1).toString());
      if(nextInput) {
        nextInput.focus();
      }
      this.currentIndexCode++;
    }
  }

  // Function to focus on the previous input
  handleKeydown(event: KeyboardEvent): void {
    if (this.currentIndexCode > 0 && event.key === "Backspace") {
      // Không cho phép xóa dữ liệu do sự kiện backspace
      event.preventDefault();
      // Tự xóa dữ liệu
      this.code[this.currentIndexCode] = "";
      // Dịch chuyển vị trí ô input focus
      let previousInput: HTMLElement | null = document.getElementById("code" + (this.currentIndexCode -1).toString());
      if(previousInput) {
        previousInput.focus();
      }
      this.currentIndexCode--;
    }
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  submitCode():void {
    this.validTemplatePopup?.close();
  }

  // Định dạng dữ liệu nhập vào cho ô valid
  onInputChange(event: any): void {
    const input = event.target;
    input.value = input.value.replace(/\D/g, '');
  }
}
