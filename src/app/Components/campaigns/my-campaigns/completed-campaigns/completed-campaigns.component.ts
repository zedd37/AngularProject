import { Component, OnInit } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-completed-campaigns',
  templateUrl: './completed-campaigns.component.html',
  styleUrls: ['./completed-campaigns.component.css']
})
export class CompletedCampaignsComponent implements OnInit {

  constructor(private campaigns: CampaignsService) {
  }
  completedCampaigns: any;
  ngOnInit(): void {
    this.completedCampaigns = this.campaigns.getCompleted().subscribe(Response => {
      this.completedCampaigns = Response;
        console.log(Response);
    })
  }
}

