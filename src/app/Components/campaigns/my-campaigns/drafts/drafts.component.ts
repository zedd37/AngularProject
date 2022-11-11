import { Component, OnInit } from '@angular/core';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css']
})
export class DraftsComponent implements OnInit {

  constructor(private campaigns: CampaignsService) {
  }
  draftsCampaigns: any;
  
  ngOnInit(): void {
    this.draftsCampaigns = this.campaigns.getDrafts().subscribe(Response => {
      this.draftsCampaigns = Response;
      console.log(Response);
    })
  }

}
