import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignupAndLoginService {
  constructor(private client: HttpClient) {}
  private brandBaseUrl = 'http://localhost:8000/api/brands';
  private influencerBaseUrl = 'http://localhost:8000/api/influencers';
  addNewBrand(newBrand: any) {
    return this.client.post(this.brandBaseUrl, newBrand);
  }
  addNewInfluencer(newInfluencer: any) {
    return this.client.post(this.influencerBaseUrl, newInfluencer);
  }
  getBrand(brandEmail: any) {
    return this.client.get(`${this.brandBaseUrl}/${brandEmail}`);
  }
  getInfluencer(influencerEmail: any) {
    return this.client.get(`${this.influencerBaseUrl}/${influencerEmail}`);
  }
}
