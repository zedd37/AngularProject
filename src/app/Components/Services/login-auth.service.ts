import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginAuthService {
  constructor(private client: HttpClient) {}
  private brandBaseUrl = 'http://localhost:8000/api/brands/sanctum/token';
  brandAuth(brandData: any) {
    return this.client.post(this.brandBaseUrl, brandData);
  }
}
