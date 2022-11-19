import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SignupAndLoginService } from '../Services/signup-and-login.service';
import { BrandService } from '../Services/brand.service';
import { RoleGuard } from 'src/app/Guard/role.guard';
import { LoginAuthService } from '../Services/login-auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(
    private Http: HttpClient,
    private BrandService: SignupAndLoginService,
    private brandService: BrandService,
    public loginAuth:LoginAuthService
  ) {}
 
  brand: any;
  loader = true;
  ngOnInit(): void {
    this.showBrand();
    setTimeout(() => {
      this.loader = false;
    }, 3000);
  }
  showBrand() {
    let that = this;
    this.brand = this.brandService.getlogedBrand().subscribe((brand) => {
      this.brand = brand;
    
      console.log(this.brand);
    });
  }
}
