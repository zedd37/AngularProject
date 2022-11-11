import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-update-campaign-three',
  templateUrl: './update-campaign-three.component.html',
  styleUrls: ['./update-campaign-three.component.css']
})
export class UpdateCampaignThreeComponent implements OnInit {


  campaignId = 0;
  constructor(
    private campaignsService: CampaignsService,
    private activated: ActivatedRoute,
    private router: Router
  ) {
    this.campaignId = activated.snapshot.params['campaignId'];
  }

  campaign: any;

  ngOnInit(): void {
    let that = this;
    this.campaignsService.getCampaign(this.campaignId).subscribe({
      next(data) {
        that.campaign = data;
      },
      error(err) {
        console.log(err);
      },
    });
  }

  addTikTokValidator = new FormGroup({});

  UpdateTTDet(
    tt_posts_imgs: any,
    tt_posts_vids: any,
    tt_stories_imgs: any,
    tt_stories_vids: any,
    tt_vids: any,
    tt_vids_duration: any,
    tt_hashtags: any,
    tt_tags: any
  ) {
    console.log({ tt_posts_imgs, tt_vids});

    this.campaignsService
      .updateTT(this.campaignId,{
        campaign_id: this.campaignId,
        tt_posts_imgs: tt_posts_imgs,
        tt_posts_vids: tt_posts_vids,
        tt_stories_imgs: tt_stories_imgs,
        tt_stories_vids: tt_stories_vids,
        tt_vids: tt_vids,
        tt_vids_duration: tt_vids_duration,
        tt_hashtags: tt_hashtags,
        tt_tags: tt_tags,
      })
      .subscribe(() => {
        {this.router.navigateByUrl('/profile');}
      });
  }
}


