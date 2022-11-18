import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-admin-header',
  templateUrl: './brand-admin-header.component.html',
  styleUrls: ['./brand-admin-header.component.css']
})
export class BrandAdminHeaderComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
