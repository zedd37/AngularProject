import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-create-campaign-ig-tt',
  templateUrl: './create-campaign-ig-tt.component.html',
  styleUrls: ['./create-campaign-ig-tt.component.css']
})
export class CreateCampaignIgTtComponent implements OnInit {

  campaignId = 0;
  constructor(
    private campaignsService: CampaignsService,
    private activated: ActivatedRoute,
    private router: Router
  ) {
    this.campaignId = activated.snapshot.params['campaignId'];
  }

  ngOnInit(): void {}

  addInstagramValidator = new FormGroup({});

  AddIgDet(
    ig_posts_imgs: any,
    ig_posts_vids: any,
    ig_stories_imgs: any,
    ig_stories_vids: any,
    ig_reels: any,
    ig_reel_duration: any,
    ig_hashtags: any,
    ig_tags: any
  ) {
    console.log({ ig_posts_imgs, ig_reels });

    this.campaignsService
      .addNewIG(this.campaignId,{
        campaign_id: this.campaignId,
        ig_posts_imgs: ig_posts_imgs,
        ig_posts_vids: ig_posts_vids,
        ig_stories_imgs: ig_stories_imgs,
        ig_stories_vids: ig_stories_vids,
        ig_reels: ig_reels,
        ig_reel_duration: ig_reel_duration,
        ig_hashtags: ig_hashtags,
        ig_tags: ig_tags,
      })
      .subscribe((campaign:any) => {
        {this.router.navigateByUrl(`/create-campaign/tiktok/${campaign.campaign_id}`);}
      });
  }
}

