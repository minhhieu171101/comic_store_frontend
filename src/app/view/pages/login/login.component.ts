import {ChangeDetectorRef, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {RegisterModel} from "../../../models/RegisterModel";
import {LoginModel} from "../../../models/LoginModel";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {ToastrService} from "ngx-toastr";
import {LoginService} from "../../../core/service/login.service";
import {MailModel} from "../../../models/MailModel";
import {ResponseStringModel} from "../../../models/response/ResponseStringModel";
import {RegisterFormValidModel} from "../../../models/validation/RegisterFormValidModel";
import {LoginFormValidModel} from "../../../models/validation/LoginFormValidModel";
import {Router} from "@angular/router";
import {ResponseAuthModel} from "../../../models/response/ResponseAuthModel";
import {HeaderComponent} from "../../../components/header/header.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  // Kiểm tra đang là phần đăng nhập hay đăng ký
  isLoginForm: boolean  = true;

  // Đối tượng cho việc validate form input của đăng nhập
  loginFormValid: LoginFormValidModel = new LoginFormValidModel();

  // Đối tượng cho việc validate form input của đăng ký
  registerFormValid: RegisterFormValidModel = new RegisterFormValidModel();

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
      private toaStr: ToastrService,
      private dialog: MatDialog,
      private loginService: LoginService,
      private router: Router,
      private cdr: ChangeDetectorRef
  ) {
  }

  // Thực hiện gửi mail khi nhấn đăng ký
  onRegister(): void {
    if (this.validateRegisterForm()) {
      const emailDTO: MailModel = new MailModel();
      emailDTO.mail = this.registerObject.email;
      this.loginService.sendEmail(emailDTO).subscribe();
      this.openValidPopup();
    }
  }

  onLogin(): void {
    if (this.validateLoginForm()) {
      this.loginService.login(this.loginObject).subscribe((res: ResponseAuthModel): void => {
        if (res.status === "OK") {
          this.toaStr.success(res.message);
          localStorage.clear();
          localStorage.setItem(res.data.tokenName, res.data.accessToken);
          this.cdr.detectChanges();
          this.router.navigateByUrl("/home");
        }
      })
    }
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

  // Thực hiện chuyển giữa màn đăng nhập và đăng ký
  toLoginForm(toLoginForm: boolean): void {
    this.isLoginForm = toLoginForm;
    if (toLoginForm) {
      this.registerFormValid = new RegisterFormValidModel();
    } else {
      this.loginFormValid = new LoginFormValidModel();
    }
  }

  // Thực hiện bật popup validate code
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

  // Thực hiện di chuyển ô input khi xóa giá trị trong popup valid code
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

  // Thực hiện đóng popup khi ấn hủy
  closeDialog(): void {
    this.dialog.closeAll();
  }

  // Thực hiện xác thực mã email
  submitCode():void {
    this.registerObject.code = this.code.join("");
    this.loginService.register(this.registerObject).subscribe((res: ResponseStringModel): void => {

      if (res.status === "OK") {
        this.toaStr.success(res.message);
        this.registerFormValid = new RegisterFormValidModel();
        this.validTemplatePopup?.close();
        this.toLoginForm(true);

      } else if (res.status === "BAD_REQUEST") {
        this.toaStr.error(res.message);
      }
    })
  }

  // Định dạng dữ liệu nhập vào cho ô valid
  onInputChange(event: any): void {
    const input = event.target;
    input.value = input.value.replace(/\D/g, '');
  }
}
