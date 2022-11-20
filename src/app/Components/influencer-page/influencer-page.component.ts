import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { CampaignsService } from 'src/app/Services/campaigns.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { BrandService } from '../Services/brand.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-influencer-page',
  templateUrl: './influencer-page.component.html',
  styleUrls: ['./influencer-page.component.css']
})
export class InfluencerPageComponent implements OnInit {

  constructor(private Http: HttpClient, private campaignsService: CampaignsService, private tokenService: BrandService) {
    this.notificationNumberCount = 0;

  }
  influencer: any = null
  latestCampaigns: any;
  notificationNumberCount: number;
  isOpen = false;
  date: any;

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
    })

    this.campaignsService.getLatest(this.date).subscribe({
      next(data: any) {
        that.latestCampaigns = data;
        that.notificationNumberCount = data.length;
        console.log(that.latestCampaigns);
      },
      error(err) {
        console.log(err);
      },
    });

    // this.campaignsService.subject.subscribe(()=>this.notificationNumberCount++);

    this.tokenService.getlastUsedAt().subscribe({
      next(data: any) {
        that.date = data.last_used_at;
        that.date = formatDate(that.date, 'yyyy-MM-dd HH:mm:ss', 'EN-US');
        // console.log(that.date);
      },
      error(err: any) {
        console.log(err);
      },
    });
  }
  increment() {
    this.notificationNumberCount++;
  }

  clear() {
    this.isOpen = !this.isOpen
    this.campaignsService.resetDate();
    this.notificationNumberCount = 0;
  }
}
