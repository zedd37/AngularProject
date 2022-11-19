import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class BrandService {
  brand: any;
  constructor(private brandhttp: HttpClient) { }

  baseurl = 'http://localhost:8000/api/brands';
  getBrandInfo(ID: any) {
    return this.brandhttp.get(`${this.baseurl}/${ID}`);
  }
  getAllBrands() {
    return this.brandhttp.get(this.baseurl);
  }
  deleteBrand(id: number) {
    return this.brandhttp.delete(`${this.baseurl}/${id}`);
  }
  brandInfourl = 'http://127.0.0.1:8000/api/brandinfo';

  updateBrandInfo(ID: any, BrandInfo: any) {

    return this.brandhttp.put(`${this.brandInfourl}/${ID}`, BrandInfo);

  }

  brandurl = 'http://127.0.0.1:8000/api/brands';

  updateBrand(ID: any, Brand: any) {

    return this.brandhttp.put(`${this.brandurl}/${ID}`, Brand);
  }
  getlogedBrand() {
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    return this.brandhttp.get('http://localhost:8000/api/brand', {
      headers: header
    })
  }

  getlastUsedAt() {
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    return this.brandhttp.get("http://localhost:8000/api/last-used-at", {
      headers: header
    })
  }
}