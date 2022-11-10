import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css'],
})
export class CampaignDetailsComponent implements OnInit {
  campaignId=0;
  constructor(private activated: ActivatedRoute, private campaignDetailsService: CampaignsService) {
    this.campaignId = activated.snapshot.params['campaignId'];
  }

  campaign: any;

  ngOnInit(): void {
    let that = this;
    this.campaignDetailsService.getCampaign(this.campaignId).subscribe({
      next(data) {
        that.campaign = data;
        // console.log(that.campaign)
      },
      error(err) {
        console.log(err);
      },
    });
  }
}


