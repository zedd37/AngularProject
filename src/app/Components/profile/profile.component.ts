import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignupAndLoginService } from '../Services/signup-and-login.service';
import { BrandService } from '../Services/brand.service';
import { RoleGuard } from 'src/app/Guard/role.guard';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private Http: HttpClient,

    private BrandService: SignupAndLoginService
  ) {}
  brand: any;

  ngOnInit(): void {
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    let that = this;
    this.Http.get('http://localhost:8000/api/brand', {
      headers: header,
    }).subscribe({
      next(data) {
        that.brand = data;
        console.log(data);
      },
      error(err) {
        console.log(err);
      },
    }); 
    this.Http.get(`http://localhost:8000/api/brands/${this.brand.id}`, {
      headers: header,
    }).subscribe({

      next(data) {
        // that.brand = data;
        console.log(data);
      },
      error(err) {
        console.log(err);
      },
    });
    
  }
  
}
