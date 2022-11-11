import { Component, OnInit } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-pending-campaigns',
  templateUrl: './pending-campaigns.component.html',
  styleUrls: ['./pending-campaigns.component.css']
})
export class PendingCampaignsComponent implements OnInit {

  constructor(private campaignService: CampaignsService) {}

  pendingCampaigns: any;

  ngOnInit(): void {
    let that = this;
    this.campaignService.getAllCampaigns().subscribe({
      next(data) {
        that.pendingCampaigns = data;
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
