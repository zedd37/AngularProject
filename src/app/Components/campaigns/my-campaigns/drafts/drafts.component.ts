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
  campaignId = 0;
  constructor(
    private activated: ActivatedRoute,
    private campaignService: CampaignsService,
    private router: Router
  ) {
    this.campaignId = activated.snapshot.params['campaignId'];
  }

  draftCampaigns: any;

  ngOnInit(): void {
    let that = this;
    this.campaignService.getAllCampaigns().subscribe({
      next(data) {
        that.draftCampaigns = data;
      },
      error(err) {
        console.log(err);
      },
    });
  }

  DeleteCampaign(id:number) {
    // console.log(id);
    if (confirm('Are you sure to delete?')) {
      this.campaignService.deleteCampaign(id).subscribe((campaign:any) => {

          this.ngOnInit();
        })
      };
    }
  }
