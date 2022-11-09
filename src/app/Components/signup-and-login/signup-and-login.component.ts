import { Component, OnInit } from '@angular/core';
import { SignupAndLoginService } from '../Services/signup-and-login.service';

@Component({
  selector: 'app-signup-and-login',
  templateUrl: './signup-and-login.component.html',
  styleUrls: ['./signup-and-login.component.css'],
})
export class SignupAndLoginComponent implements OnInit {
  constructor(private myService: SignupAndLoginService) {}

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
  // ------- When sign-up as brand add brand data to database ---------
  newBrand(
    fname: any,
    lname: any,
    email: any,
    conf_email: any,
    phone: any,
    password: any,
    conf_password: any,
    brand_name: any,
    job_title: any,
    hear_about_us: any,
    instagram: any
  ) {
    this.myService
      .addNewBrand({
        fname: fname,
        lname: lname,
        email: email,
        phone: phone,
        password: password,
        hear_about_us: hear_about_us,
        job_title: job_title,
        brand_name: brand_name,
        instagram: instagram,
      })
      .subscribe();
  }
  // ------- When sign-up as influencer add influencer data to database ---------

  newInfluencer(
    inf_fname: any,
    inf_lname: any,
    inf_email: any,
    inf_conf_email: any,
    inf_phone: any,
    inf_occupation: any,
    inf_hear: any,
    inf_password: any,
    inf_conf_password: any
  ) {
    this.myService
      .addNewInfluencer({
        fname: inf_fname,
        lname: inf_lname,
        email: inf_email,
        phone: inf_phone,
        password: inf_password,
        hear_about_us: inf_hear,
        occupation: inf_occupation,
      })
      .subscribe();
  }
  // ------- When login check if user is brand or influencer in database ---------
  private brand: any;
  private influencer: any;
  checkUser(log_email: any, log_password: any) {
    let that = this;

    this.myService.getBrand(log_email).subscribe({
      next(data) {
        // console.log(data);
        that.brand = data;
        // console.log(that.brand);
      },
      error(err) {
        console.log(err);
      },
    });
    this.myService.getInfluencer(log_email).subscribe({
      next(data) {
        // console.log(data);

        that.influencer = data;

        // console.log(that.brand);
      },
      error(err) {
        console.log(err);
      },
    });
    setTimeout(function () {
      if (that.brand) {
        console.log('brand');
      } else if (that.influencer) {
        console.log('influencer');
      } else {
        console.log("sign up you don't have account");
      }
      // console.log(that.brand);
    }, 1000);
  }
}
