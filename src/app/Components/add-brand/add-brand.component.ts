import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BrandService } from '../Services/brand.service';


@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  constructor(private Http:HttpClient, private BrandService:BrandService, private router:Router) { }

  brand: any = null;


  ngOnInit(): void {
    // const header = new HttpHeaders({
    //   Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    // });
  }

  AddBrand(fname:any,lname:any,brandname:any,email:any,snapchat:any,password:any,phone:any,instagram:any){

    // console.log(fname);

    this.brand = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      phone: phone,
      brand_name: brandname,
      instagram: instagram,
      snapchat:snapchat
    }
    this.BrandService.addBrand(this.brand).subscribe(a=>
      this.brand = a
      );

    this.router.navigateByUrl(`/admin-panel/brands`);

  }
}
