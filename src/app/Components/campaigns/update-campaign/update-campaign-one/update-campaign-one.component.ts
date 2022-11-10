import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-update-campaign-one',
  templateUrl: './update-campaign-one.component.html',
  styleUrls: ['./update-campaign-one.component.css']
})
export class UpdateCampaignOneComponent implements OnInit {

  instagram = 0;
  tiktok = 0;
  platforms: FormGroup;
  platformOptions: Array<any> = [
    { name: 'Instagram', value: 'instagram' },
    { name: 'TikTok', value: 'tiktok' },
  ];

  constructor(private campaignsService: CampaignsService, fb: FormBuilder, private router:Router) {

    this.platforms = fb.group({
      selectedPlatforms: new FormArray([]),
    });
  }

  ngOnInit(): void {}

  addCampaignValidator = new FormGroup({});

  onCheckboxChange(event: any) {
    const selectedPlatforms = this.platforms.controls[
      'selectedPlatforms'
    ] as FormArray;
    if (event.target.checked) {
      selectedPlatforms.push(new FormControl(event.target.value));
    } else {
      const index = selectedPlatforms.controls.findIndex(
        (x) => x.value === event.target.value
      );
      selectedPlatforms.removeAt(index);
    }

    if (selectedPlatforms.value.includes('instagram')) {
      this.instagram = 1;
    } else {
      this.instagram = 0
    }

    if (selectedPlatforms.value.includes('tiktok')) {
      this.tiktok = 1;
    } else {
      this.tiktok=0
    }
  }

  UpdateCampaign(
    title: string,
    type: string,
    start_date: any,
    country: string,
    details: any,
    image: any,
    instagram: number,
    tiktok: number
  ) {

      // this.campaignsService.updateCampaign({
      //   title: title,
      //   type: type,
      //   start_date: start_date,
      //   country: country,
      //   details: details,
      //   image: instagram,
      //   instagram: instagram,
      //   tiktok: tiktok
      // }).subscribe((campaign:any) => {
      //   if (instagram && !tiktok){this.router.navigateByUrl(`/update-campaign/instagram/${campaign.id}`);}
      //   if (tiktok && !instagram){this.router.navigateByUrl(`/update-campaign/tiktok/${campaign.id}`);}
      // if (instagram && tiktok){this.router.navigateByUrl(`/update-campaign/instagram-tiktok/${campaign.id}`);}
      // });

  }
}