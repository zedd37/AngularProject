import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private brandhttp:HttpClient) {}

  private baseurl = 'localhost:8000/api/brands';
  getBrandInfo(ID:any) {
   return this.brandhttp.get(`${this.baseurl}/${ID}`);
  }
  getAllBrands() {
    return this.brandhttp.get(this.baseurl);
  }
  deleteBrand(id:number){
    return this.brandhttp.delete(`${this.baseurl}/${id}`);
  }
}
