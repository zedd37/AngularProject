import { Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  createUrlTreeFromSnapshot,
  Router,
} from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css'],
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

  draftCampaigns: any;

  DeleteCampaign(id:number) {
    // console.log(id);
    if (confirm('Are you sure to delete?')) {
      this.campaigns.deleteCampaign(id).subscribe((campaign:any) => {

          this.ngOnInit();
        })
      };
    }
  }
