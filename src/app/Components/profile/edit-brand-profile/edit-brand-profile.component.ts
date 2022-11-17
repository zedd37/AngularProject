import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BrandService } from '../../Services/brand.service';


@Component({
  selector: 'app-edit-brand-profile',
  templateUrl: './edit-brand-profile.component.html',
  styleUrls: ['./edit-brand-profile.component.css']
})
export class EditBrandProfileComponent implements OnInit {
  brand: any = null;

  constructor(private Http:HttpClient, private BrandService:BrandService, private router:Router) { }

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
  }
  UpdateBrand(fname:any,lname:any,brandname:any,email:any,snapchat:any,facebook:any,industries:any,location:any,phone:any,instagram:any,tiktok:any,youtube:any,about:any){
    
    console.log(fname);
    this.BrandService.updateBrand(this.brand.data.id,{
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      brand_name: brandname,
      instagram: instagram,
      snapchat:snapchat
    }).subscribe();
   
   this.BrandService.updateBrandInfo(this.brand.data.id,{
    brand_id:this.brand.data.id,
    about: about,
    industries: industries,
    location: location,
    tiktok: tiktok,
    youtube: youtube,
    facebook: facebook,

  }).subscribe();
 this.router.navigateByUrl(`/profile`);

  }
}
