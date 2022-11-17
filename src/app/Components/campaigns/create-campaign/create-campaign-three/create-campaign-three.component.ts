import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-create-campaign-three',
  templateUrl: './create-campaign-three.component.html',
  styleUrls: ['./create-campaign-three.component.css']
})
export class CreateCampaignThreeComponent implements OnInit {

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


  AddTTDet(
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
      .addNewTT(this.campaignId,{
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
        {this.router.navigateByUrl(`/create-campaign/influencer-fees/${this.campaignId}`);}
      });
  }

}


