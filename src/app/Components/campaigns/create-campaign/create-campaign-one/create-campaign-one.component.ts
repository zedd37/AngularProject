import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';

@Component({
  selector: 'app-create-campaign-one',
  templateUrl: './create-campaign-one.component.html',
  styleUrls: ['./create-campaign-one.component.css'],
})
export class CreateCampaignOneComponent implements OnInit {
  instagram = 0;
  tiktok = 0;
  platforms: FormGroup;
  platformOptions: Array<any> = [
    { name: 'Instagram', value: 'instagram' },
    { name: 'TikTok', value: 'tiktok' },
  ];
  brand: any=null;

  constructor(private Http:HttpClient, private campaignsService: CampaignsService, fb: FormBuilder, private router:Router) {

    this.platforms = fb.group({
      selectedPlatforms: new FormArray([]),
    });
  }

  ngOnInit(): void {

  let that = this;
  const header = new HttpHeaders({
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  });
  this.Http.get('http://localhost:8000/api/brand', {
    headers: header,
  }).subscribe({
    next(data) {
      that.brand = data;
    },
    error(err) {
      console.log(err);
    },
  });
}

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
 titleError:any=null;
 privacyError:any=null;

  AddCampaign(
    title: string,
    type: string,
    privacy: string,
    start_date: any,
    country: string,
    details: any,
    image: any,
    instagram: number,
    tiktok: number
  ) {
    if (title==""){
      this.titleError='Title field is required.'
    }
    if (privacy==""){
      this.privacyError='Privacy field is required.'
    }
      this.campaignsService.addNewCampaign({
        brand_id:this.brand.data.id,
        title: title,
        type: type,
        privacy: privacy,
        start_date: start_date,
        country: country,
        details: details,
        // image: instagram,
        instagram: instagram,
        tiktok: tiktok,
        pending:1,
        completed:0,
        drafts:0,
      }).subscribe((campaign:any) => {
        if (instagram && !tiktok){this.router.navigateByUrl(`/create-campaign/instagram/${campaign.id}`);}
        if (tiktok && !instagram){this.router.navigateByUrl(`/create-campaign/tiktok/${campaign.id}`);}
      if (instagram && tiktok){this.router.navigateByUrl(`/create-campaign/instagram-tiktok/${campaign.id}`);}
      });
  }
}
