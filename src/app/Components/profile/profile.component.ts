import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignupAndLoginService } from '../Services/signup-and-login.service';
import { BrandService } from '../Services/brand.service';

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
brand:any;
  ngOnInit(): void {
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    let that=this
    this.Http.get('http://localhost:8000/api/brand', {
      headers: header,
    }).subscribe({

      next(data) {
        that.brand = data;
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
