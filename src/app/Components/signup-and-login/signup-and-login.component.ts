import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RoleGuard } from 'src/app/Guard/role.guard';
import { LoginAuthService } from '../Services/login-auth.service';
import { SignupAndLoginService } from '../Services/signup-and-login.service';

@Component({
  selector: 'app-signup-and-login',
  templateUrl: './signup-and-login.component.html',
  styleUrls: ['./signup-and-login.component.css'],
})
export class SignupAndLoginComponent implements OnInit {
  constructor(
    private storeService: SignupAndLoginService,
    private authService: LoginAuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  /*
   **************************************************************
   * in all medias
   **************************************************************
   */
  //---------------- if click on brand button show brand form ---
  switchToBrand(
    brand: any,
    influencer: any,
    brandBtn: any,
    influencerBtn: any,
    swtch: any,
    title: any
  ) {
    brand.classList.add('active');
    influencer.classList.remove('active');
    brandBtn.classList.add('active');
    influencerBtn.classList.remove('active');
    swtch.classList.add('active');
    title.classList.add('active');
  }

  //---------------- if click on influencer button show influencer form ---

  switchToInfluencer(
    brand: any,
    influencer: any,
    brandBtn: any,
    influencerBtn: any,
    swtch: any,
    title: any
  ) {
    brand.classList.remove('active');
    influencer.classList.add('active');
    brandBtn.classList.remove('active');
    influencerBtn.classList.add('active');
    swtch.classList.add('active');
    title.classList.add('active');
  }

  /*
   **************************************************************
   * in large and medium screens
   **************************************************************
   */
  //---------------- if click on login button show login form ---

  loginSwitch(
    container: any,
    brand: any,
    influencer: any,
    brandBtn: any,
    influencerBtn: any,
    swtch: any,
    title: any
  ) {
    container.classList.remove('login-mode');
    brand.classList.remove('active');
    influencer.classList.remove('active');
    brandBtn.classList.remove('active');
    influencerBtn.classList.remove('active');
    swtch.classList.remove('active');
    title.classList.remove('active');
  }

  //---------------- if click on sign-up button show sign-up form ---

  signSwitch(
    container: any,
    brand: any,
    influencer: any,
    brandBtn: any,
    influencerBtn: any,
    swtch: any,
    title: any
  ) {
    container.classList.add('login-mode');
    brand.classList.remove('active');
    influencer.classList.remove('active');
    brandBtn.classList.remove('active');
    influencerBtn.classList.remove('active');
    swtch.classList.remove('active');
    title.classList.remove('active');
  }
  /*
   **************************************************************
   * in small screens and mobile
   **************************************************************
   */
  //---------------- if click on sign-up button show sign-up form ---
  switchToSignup(Container: any) {
    Container.classList.remove('switch-mode');
  }

  //---------------- if click on login button show login form ---

  switchToLogin(Container: any) {
    Container.classList.add('switch-mode');
  }
  /*
   ********************************************************************
   * Dealing with database
   ********************************************************************
   */
  // ------- Brand Validation ------
  firstNameError: any = null;
  lastNameError: any = null;
  emailError: any = null;
  emailConfirmError: any = null;
  confirmE: any = null;
  confirmP: any = null;
  passwordError: any = null;
  passwordConfirmError: any = null;
  phoneError: any = null;
  brandNameError: any = null;
  brandValidation = new FormGroup({
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    emailConfirm: new FormControl(null, [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    passwordConfirm: new FormControl(null, [
      Validators.required,
      Validators.minLength(8),
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.minLength(11),
    ]),
    brandName: new FormControl(null, Validators.required),
  });
  get firstNameValid() {
    return this.brandValidation.controls.firstName.valid;
  }
  get lastNameValid() {
    return this.brandValidation.controls.lastName.valid;
  }
  get emailValid() {
    return this.brandValidation.controls.email.valid;
  }
  get emailConfirmValid() {
    return this.brandValidation.controls.emailConfirm.valid;
  }
  get passwordValid() {
    return this.brandValidation.controls.password.valid;
  }
  get passwordConfirmValid() {
    return this.brandValidation.controls.passwordConfirm.valid;
  }
  get phoneValid() {
    return this.brandValidation.controls.phone.valid;
  }
  get brandNameValid() {
    return this.brandValidation.controls.brandName.valid;
  }
  // ------- When sign-up as brand add brand data to database ---------
  newBrand(
    fname: any,
    lname: any,
    email: any,
    conf_email: any,
    phone: any,
    password: any,
    conf_password: any,
    brand_name: any
  ) {
    if (this.brandValidation.controls.firstName.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.firstNameError = 'You should enter your name';
    } else if (this.brandValidation.controls.lastName.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.lastNameError = 'you should enter your family name ';
    } else if (this.brandValidation.controls.email.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.emailError = 'you should write your email in form example@gmail.com';
    } else if (this.brandValidation.controls.emailConfirm.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.emailConfirmError = 'You should confirm your email';
    } else if (email !== conf_email) {
      this.confirmP = null;
      this.confirmE = "the emails aren't equal";
    } else if (this.brandValidation.controls.password.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.passwordError =
        'You should write your password and at least 8 characters';
    } else if (this.brandValidation.controls.passwordConfirm.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.passwordConfirmError = 'You should confirm your password';
    } else if (password !== conf_password) {
      this.confirmE = null;
      this.confirmP = "the passwords aren't equal";
    } else if (this.brandValidation.controls.phone.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.phoneError = 'You should enter your phone and at least 11 numbers';
    } else if (this.brandValidation.controls.brandName.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.brandNameError = 'You should enter your brand Name';
    } else {
      this.confirmE = null;
      this.confirmP = null;
      this.storeService
        .addNewBrand({
          fname: fname,
          lname: lname,
          email: email,
          phone: phone,
          password: password,
          brand_name: brand_name,
        })
        .subscribe();
    }
  }
  // ------- When sign-up as influencer add influencer data to database ---------

  newInfluencer(
    inf_fname: any,
    inf_lname: any,
    inf_email: any,
    inf_conf_email: any,
    inf_phone: any,
    inf_occupation: any,
    inf_password: any,
    inf_conf_password: any
  ) {
    if (this.brandValidation.controls.firstName.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.firstNameError = 'You should enter your name';
    } else if (this.brandValidation.controls.lastName.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.lastNameError = 'you should enter your family name ';
    } else if (this.brandValidation.controls.email.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.emailError = 'you should write your email in form example@gmail.com';
    } else if (this.brandValidation.controls.emailConfirm.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.emailConfirmError = 'You should confirm your email';
    } else if (inf_email !== inf_conf_email) {
      this.confirmP = null;
      this.confirmE = "the emails aren't equal";
    } else if (this.brandValidation.controls.password.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.passwordError =
        'You should write your password and at least 8 characters';
    } else if (this.brandValidation.controls.passwordConfirm.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.passwordConfirmError = 'You should confirm your password';
    } else if (inf_password !== inf_conf_password) {
      this.confirmE = null;
      this.confirmP = "the passwords aren't equal";
    } else if (this.brandValidation.controls.phone.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.phoneError = 'You should enter your phone and at least 11 numbers';
    } else if (this.brandValidation.controls.brandName.invalid) {
      this.confirmE = null;
      this.confirmP = null;
      this.brandNameError = 'You should enter your brand Name';
    } else {
      this.confirmE = null;
      this.confirmP = null;
      this.storeService
        .addNewInfluencer({
          fname: inf_fname,
          lname: inf_lname,
          email: inf_email,
          phone: inf_phone,
          password: inf_password,
          occupation: inf_occupation,
        })
        .subscribe();
    }
  }
  // ------- When login check if user is brand or influencer in database ---------
  type: any = false;
  checkError: any = null;
  loginErrorPassword: any = null;
  loginErrorEmail: any = null;
  onChange(val: any) {
    this.type = val.target.value;
  }
  checkUser(log_email: any, log_password: any) {
    let that = this;
    if (this.type === 'brand') {
      this.checkError = null;
      this.authService
        .brandAuth({ email: log_email, password: log_password })
        .subscribe({
          next(data: any) {
            console.log('brand');

            sessionStorage.setItem('token', data.access_token);
            // sessionStorage.setItem('isAdmin', data.isAdmin);
            that.authService.isAdmin(data.isAdmin);
            that.router.navigate(['/profile']);
          },
          error(err) {
            // console.log(err.error);
            if (err.error.errors) {
              that.loginErrorPassword = err.error.errors.password;
              that.loginErrorEmail = err.error.errors.email;
            }
          },
        });
    } else if (this.type === 'influencer') {
      this.checkError = null;
      this.authService
        .influencerAuth({ email: log_email, password: log_password })
        .subscribe({
          next(data: any) {
            console.log('influencer');
            sessionStorage.setItem('token', data.access_token);
            that.router.navigate(['/profile']);
          },
          error(err) {
            console.log(err);
            if (err.error.errors) {
              that.loginErrorPassword = err.error.errors.password;
              that.loginErrorEmail = err.error.errors.email;
            }
          },
        });
    } else {
      this.checkError = 'please choose your account type';
    }
  }
}
