import { Component, OnInit } from '@angular/core';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-my-campaigns',
  templateUrl: './my-campaigns.component.html',
  styleUrls: ['./my-campaigns.component.css']
})
export class MyCampaignsComponent implements OnInit {

  constructor(private campaigns: CampaignsService) {
  }

  pendingCampaigns: any;

  ngOnInit(): void {
  }
  getPending() {
  }
  getCompleted() {
  }
  getDrafts() {
  }
}
