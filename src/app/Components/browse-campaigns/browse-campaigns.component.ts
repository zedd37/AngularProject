import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-browse-campaigns',
  templateUrl: './browse-campaigns.component.html',
  styleUrls: ['./browse-campaigns.component.css']
})
export class BrowseCampaignsComponent implements OnInit {

  currentCampaigns: any=null;
  constructor(private Http: HttpClient,private router:Router, private campaigns: CampaignsService) { }

  ngOnInit(): void {
    let that = this;
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    this.Http.get('http://localhost:8000/api/campaign', {
      headers: header,
    }).subscribe({
      next(data) {
        that.currentCampaigns = data;
        console.log(data);
      },
      error(err) {
        console.log(err);
      },
    });

  }

  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }
}
