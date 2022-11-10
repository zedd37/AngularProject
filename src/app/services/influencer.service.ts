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



  // getFilter(data:any){
  //   return this.http.get(this.url+`/api/influencers-filter`, data);
  // }

}
