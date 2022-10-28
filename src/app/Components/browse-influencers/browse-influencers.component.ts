import { Component, OnInit } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-browse-influencers',
  templateUrl: './browse-influencers.component.html',
  styleUrls: ['./browse-influencers.component.css']
})
export class BrowseInfluencersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  ageValue: number = 0;
  ageHighValue: number = 70;
  ageOptions: Options = {
    floor: 0,
    ceil: 70
  };

  priceValue: number = 0;
  priceHighValue: any = 60;
  priceOptions: Options = {
    floor: 0,
    ceil: 60
  };

  rateValue: number = 0;
  rateHighValue: number = 10;
  rateOptions: Options = {
    floor: 0,
    ceil: 10
  };

  followersValue: number = 5000;
  followersHighValue: number = 1000000;
  followersOptions: Options = {
    floor: 5000,
    step: 5000,
    ceil: 1000000
  };



}
