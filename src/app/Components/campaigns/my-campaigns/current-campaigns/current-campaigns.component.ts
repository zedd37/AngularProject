import { Component, OnInit } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-current-campaigns',
  templateUrl: './current-campaigns.component.html',
  styleUrls: ['./current-campaigns.component.css'],
})
export class CurrentCampaignsComponent implements OnInit {
  constructor(private campaignService: CampaignsService) {}

  currentCampaigns: any;

  ngOnInit(): void {
    let that = this;
    this.campaignService.getAllCampaigns().subscribe({
      next(data) {
        that.currentCampaigns = data;
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
