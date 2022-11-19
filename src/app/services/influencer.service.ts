import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfluencerService {

  url:string = 'http://localhost:8000';

  constructor(private http:HttpClient) { }

  listInfluencers(){
    return this.http.get<any>(this.url+`/api/influencers`);
  }


  url2= 'http://localhost:8000/api/influencers'
  deleteInfluencer(id:number){
    return this.http.delete(`${this.url2}/${id}`);
  }


  addInfluencer(influencer:any){
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    return this.http.post('http://localhost:8000/api/influencers',influencer)
  }
  // getFilter(data:any){
  //   return this.http.get(this.url+`/api/influencers-filter`, data);
  // }

}
