import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BrandService {

  constructor(private brand: HttpClient) {

  }
  private baseBrandURL = "http://localhost:8000/api/brands/";

  getAllBrands() {
    // console.log(this.brand.get(this.baseBrandURL));
    // return this.brand.get(this.baseBrandURL,{observe:"response"});
    return this.brand.get(this.baseBrandURL);
  }

  getBrand(brandId:any){
    return this.brand.get(`${this.baseBrandURL}/${brandId}`)
  }

}
