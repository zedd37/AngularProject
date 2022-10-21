import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-and-login',
  templateUrl: './signup-and-login.component.html',
  styleUrls: ['./signup-and-login.component.css'],
})
export class SignupAndLoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  switchToBrand(
    brand: any,
    influnser: any,
    brandBtn: any,
    influnserBtn: any,
    swtch: any,
    title: any
  ) {
    brand.classList.add('active');
    influnser.classList.remove('active');
    brandBtn.classList.add('active');
    influnserBtn.classList.remove('active');
    swtch.classList.add('active');
    title.classList.add('active');
  }
  switchToInfluncer(
    brand: any,
    influnser: any,
    brandBtn: any,
    influnserBtn: any,
    swtch: any,
    title: any
  ) {
    brand.classList.remove('active');
    influnser.classList.add('active');
    brandBtn.classList.remove('active');
    influnserBtn.classList.add('active');
    swtch.classList.add('active');
    title.classList.add('active');
  }
  loginSwitch(
    container: any,
    brand: any,
    influnser: any,
    brandBtn: any,
    influencerBtn: any,
    swtch: any,
    title: any
  ) {
    container.classList.remove('login-mode');
    brand.classList.remove('active');
    influnser.classList.remove('active');
    brandBtn.classList.remove('active');
    influencerBtn.classList.remove('active');
    swtch.classList.remove('active');
    title.classList.remove('active');
  }
  signSwitch(
    container: any,
    brand: any,
    influnser: any,
    brandBtn: any,
    influencerBtn: any,
    swtch: any,
    title: any
  ) {
    container.classList.add('login-mode');
    brand.classList.remove('active');
    influnser.classList.remove('active');
    brandBtn.classList.remove('active');
    influencerBtn.classList.remove('active');
    swtch.classList.remove('active');
    title.classList.remove('active');
  }
  switchToSignup(Container: any) {
    Container.classList.remove('switch-mode');
  }
  switchToLogin(Container: any) {
    Container.classList.add('switch-mode');
  }
}
