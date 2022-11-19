import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  constructor(private client: HttpClient) {}
  private brandBaseUrl = 'http://localhost:8000/api/brands/sanctum/token';
  private influencerBaseUrl = 'http://localhost:8000/api/influencers/sanctum/token';
    brand:any;
  type=false;
  brandAuth(brandData: any) {
    return this.client.post(this.brandBaseUrl, brandData);
  }
 isAdmin() {
    const header = new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      });
    let that = this;
    this.client.get('http://localhost:8000/api/brand', {
      headers: header,
      }).subscribe({
          next(data) {
            that.brand = data;
            // if (that.brand.data.isAdmin) {
            //   that.admin = true;
            // }
          },
          error(err) {
            console.log(err);
          },
        });
    if (!this.brand.data.isAdmin) {
      return false;
    }
    return true;
  }
  influencerAuth(influencerData: any) {
    return this.client.post(this.influencerBaseUrl, influencerData);
  }

  isLoggedIn() {
    return !!sessionStorage.getItem('token');
  }
set Type(type:any){
this.type = type;
}
get Type(){
  return this.type;
}
}
