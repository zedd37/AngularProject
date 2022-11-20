import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit,OnDestroy } from '@angular/core';
import { SignupAndLoginService } from '../Services/signup-and-login.service';
import { BrandService } from '../Services/brand.service';
import { RoleGuard } from 'src/app/Guard/role.guard';
import { LoginAuthService } from '../Services/login-auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit , OnDestroy {
  constructor(
    private Http: HttpClient,
    private BrandService: SignupAndLoginService,
    private brandService: BrandService,
    
  ) {}
  private subscription: any;
  brand: any;

  brandData: any;
  loader = true;
  ngOnInit(): void {
    let that = this;
    this.subscription = this.brandService.getlogedBrand().subscribe({
    next(data){
that.brand =data;
    },
    error(err){
      console.log(err);
    }
  })
    setTimeout(() => {
      this.loader = false;
    }, 3000);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
