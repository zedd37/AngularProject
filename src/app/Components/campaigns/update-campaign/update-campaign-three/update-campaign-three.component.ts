import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
        that.tiktok.controls.postImgs.setValue(that.campaign.data.tiktok_info.tt_posts_imgs);
        that.tiktok.controls.postVids.setValue(that.campaign.data.tiktok_info.tt_posts_vids);
        that.tiktok.controls.storyImgs.setValue(that.campaign.data.tiktok_info.tt_stories_imgs);
        that.tiktok.controls.storyVids.setValue(that.campaign.data.tiktok_info.tt_stories_vids);
        that.tiktok.controls.vids.setValue(that.campaign.data.tiktok_info.tt_vids);
        that.tiktok.controls.duration.setValue(that.campaign.data.tiktok_info.tt_vids_duration);
      },
      error(err) {
        console.log(err);
      },
    });
  }

  tiktok = new FormGroup({
    postImgs: new FormControl('',[Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    postVids: new FormControl('',[Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    storyImgs: new FormControl('',[Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    storyVids: new FormControl('',[Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    vids: new FormControl('',[Validators.pattern(/^-?(0|[1-9]\d*)?$/)]),
    duration: new FormControl('',[Validators.pattern(/^-?(0|[1-9]\d*)?$/)])
  });


  get postImgs(){
    return this.tiktok.controls.postImgs.valid
  }

  get postVids(){
    return this.tiktok.controls.postVids.valid
  }

  get storyImgs(){
    return this.tiktok.controls.storyImgs.valid
  }

  get storyVids(){
    return this.tiktok.controls.storyVids.valid
  }

  get vids(){
    return this.tiktok.controls.vids.valid
  }

  get duration(){
    return this.tiktok.controls.duration.valid
  }

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
        {this.router.navigateByUrl(`/update-campaign/influencer-fees/${this.campaignId}`);}
      });
  }
}


