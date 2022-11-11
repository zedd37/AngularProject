import { Component, OnInit } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-completed-campaigns',
  templateUrl: './completed-campaigns.component.html',
  styleUrls: ['./completed-campaigns.component.css']
})
export class CompletedCampaignsComponent implements OnInit {

  constructor(private campaignService: CampaignsService) {}

  completedCampaigns: any;

  ngOnInit(): void {
    let that = this;
    this.campaignService.getAllCampaigns().subscribe({
      next(data) {
        that.completedCampaigns = data;
      },
      error(err) {
        console.log(err);
      },
    });
  }
}

