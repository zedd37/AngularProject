import { Component, OnInit } from '@angular/core';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-admin-campaigns',
  templateUrl: './admin-campaigns.component.html',
  styleUrls: ['./admin-campaigns.component.css']
})
export class AdminCampaignsComponent implements OnInit {

  constructor(private campaignService: CampaignsService) { }
  draftsCampaigns: any;
  currentCampaigns: any;

  ngOnInit(): void {
    this.draftsCampaigns = this.campaignService.getDrafts().subscribe(Response => {
      this.draftsCampaigns = Response;
      // console.log(Response);
    })
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
  draftCampaigns: any;

  DeleteCampaign(id:number) {
    // console.log(id);
    if (confirm('Are you sure to delete?')) {
      this.campaignService.deleteCampaign(id).subscribe((campaign:any) => {

          this.ngOnInit();
        })
      };
    }
}

