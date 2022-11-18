import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { data } from 'jquery';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-update-campaign-four',
  templateUrl: './update-campaign-four.component.html',
  styleUrls: ['./update-campaign-four.component.css']
})
export class UpdateCampaignFourComponent implements OnInit {

  campaignId = 0;
  constructor(
    private campaignsService: CampaignsService,
    private activated: ActivatedRoute,
    private router: Router
  ) {
    this.campaignId = activated.snapshot.params['campaignId'];
  }

  campaign: any;
  fees = new FormGroup({
    amount: new FormControl( '' ,[Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  });



ngOnInit(): void {
    let that = this;

    this.campaignsService.getCampaign(this.campaignId).subscribe({
      next(data) {
        that.campaign = data;
        that.fees.controls.amount.setValue(that.campaign.data.fees_info.fees_amount);
      },
      error(err) {
        console.log(err);
      },
    });
}


  get amount(){
    return this.fees.controls.amount.valid
  }

  UpdateFees(
    fees_amount: any,
    fees_details: string,
  ) {
    this.campaignsService
      .updateFee(this.campaignId,{
        campaign_id: this.campaignId,
        fees_amount: fees_amount,
        fees_details: fees_details,
        pending:1
      })
      .subscribe(() => {
        {this.router.navigateByUrl(`/campaigns/${this.campaignId}`);}
      });
  }
}

