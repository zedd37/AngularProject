import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-create-campaign-four',
  templateUrl: './create-campaign-four.component.html',
  styleUrls: ['./create-campaign-four.component.css']
})
export class CreateCampaignFourComponent implements OnInit {

  campaignId = 0;
  constructor(
    private campaignsService: CampaignsService,
    private activated: ActivatedRoute,
    private router: Router
  ) {
    this.campaignId = activated.snapshot.params['campaignId'];
  }

  ngOnInit(): void {

  }

  fees = new FormGroup({
    amount: new FormControl('',[Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  });


  get amount(){
    return this.fees.controls.amount.valid
  }


  AddFees(
    fees_amount: any,
    fees_details: string,

  ) {

    this.campaignsService
      .addFee(this.campaignId,{
        campaign_id: this.campaignId,
        fees_amount: fees_amount,
        fees_details: fees_details

      })
      .subscribe(() => {
        {this.router.navigateByUrl(`/campaigns/${this.campaignId}`);}
      });
  }
}
