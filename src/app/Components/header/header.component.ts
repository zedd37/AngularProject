import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SignupAndLoginService } from '../Services/signup-and-login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(
    private Http: HttpClient,
    private BrandService: SignupAndLoginService,
    private router: Router
  ) {}
  brand: any;
  ngOnInit(): void {
    this.brand = sessionStorage.getItem('isAdmin');
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
