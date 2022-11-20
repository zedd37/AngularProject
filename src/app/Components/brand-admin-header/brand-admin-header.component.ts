import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthService } from '../Services/login-auth.service';

@Component({
  selector: 'app-brand-admin-header',
  templateUrl: './brand-admin-header.component.html',
  styleUrls: ['./brand-admin-header.component.css']
})
export class BrandAdminHeaderComponent implements OnInit {

  constructor( private router:Router,public loginAuth:LoginAuthService) { }

  ngOnInit(): void {
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
