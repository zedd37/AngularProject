import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  url:string = 'http://localhost:8000';

  constructor(private http:HttpClient) { }

  listInfluencers(){
    return this.http.get<any>(this.url+`/api/influencers`);
  }


  influencerurl = 'http://127.0.0.1:8000/api/influencers';

  updateInfluencer(ID:any, influencer:any) {

   return this.http.put(`${this.influencerurl}/${ID}`, influencer);
  }

  // getFilter(data:any){
  //   return this.http.get(this.url+`/api/influencers-filter`, data);
  // }

}
