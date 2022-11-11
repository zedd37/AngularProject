import { Component, OnInit } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-pending-campaigns',
  templateUrl: './pending-campaigns.component.html',
  styleUrls: ['./pending-campaigns.component.css']
})
export class PendingCampaignsComponent implements OnInit {
  constructor(private campaigns: CampaignsService) {
  }
  pendingCampaigns: any;

  ngOnInit(): void {
    this.pendingCampaigns = this.campaigns.getPending().subscribe(Response => {
      this.pendingCampaigns = Response;
      console.log(Response);
    })
  }
}
