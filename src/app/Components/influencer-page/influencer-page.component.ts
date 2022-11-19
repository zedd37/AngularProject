import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-influencer-page',
  templateUrl: './influencer-page.component.html',
  styleUrls: ['./influencer-page.component.css']
})
export class InfluencerPageComponent implements OnInit {

  constructor(private Http: HttpClient) { }
  influencer: any = null
  ngOnInit(): void {
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    let that = this;
    this.Http.get('http://localhost:8000/api/influencer', {
      headers: header,
    }).subscribe({
      next(data) {
        that.influencer = data;
        console.log(that.influencer.email);
      },
      error(err) {
        console.log(err);
      },
    });
  }

}
