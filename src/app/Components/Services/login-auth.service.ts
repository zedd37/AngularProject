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
  influencerAuth(influencerData: any) {
    return this.client.post(this.influencerBaseUrl, influencerData);
  }

  isLoggedIn() {
    return !!sessionStorage.getItem('token');
  }

}
