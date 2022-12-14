import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { InfluencerService } from 'src/app/services/influencer.service';
import { BrandService } from '../Services/brand.service';
import { LoginAuthService } from '../Services/login-auth.service';

@Component({
  selector: 'app-browse-influencers',
  templateUrl: './browse-influencers.component.html',
  styleUrls: ['./browse-influencers.component.css'],
})
export class BrowseInfluencersComponent implements OnInit, OnDestroy {
  brand: any;
  brandData: any;
  constructor(
    private influencerService: InfluencerService,
    private Http: HttpClient,
    public loginAuth: LoginAuthService,
    private brandService: BrandService
  ) {}
  private subscription: any;
  loader = true;
  influencers: any;
  filteredInfluencers: any = [];
  // selected_categories:any ={};

  ngOnInit(): void {
    this.showInfluencers();
    let that = this;
    this.subscription = this.brandData = this.brandService
      .getlogedBrand()
      .subscribe({
        next(data) {
          that.brand = data;
        },
        error(err) {
          console.log(err);
        },
      });
    setTimeout(() => {
      this.loader = false;
    }, 3000);
  }

  showInfluencers() {
    this.influencers = this.influencerService
      .listInfluencers()
      .subscribe((influencer) => {
        this.influencers = influencer;
        this.filteredInfluencers = influencer;
        // console.log(this.influencers);
      });
  }

  search(word: any) {
    this.filteredInfluencers = [];
    for (let i = 0; i < this.influencers.length; i++) {
      if (this.influencers[i].fname.toLowerCase() == word.toLowerCase()) {
        this.filteredInfluencers.push(this.influencers[i]);
      } else if (word == '') {
        this.showInfluencers();
      }
    }
  }

  filter(
    minAge: any,
    maxAge: any,
    minPrice: any,
    maxPrice: any,
    minEngagementRate: any,
    maxEngagementRate: any,
    minFollowers: any,
    maxFollowers: any,
    gender: any,
    maritalStatus: any,
    children: any,
    country: any
  ) {
    this.filteredInfluencers = [];

    for (let i = 0; i < this.influencers.length; i++) {
      // console.log(this.influencers[i]);
      // if(this.influencers.age>minAge && this.influencers.age<maxAge){
      if (
        this.influencers[i].age > minAge &&
        this.influencers[i].age < maxAge &&
        this.influencers[i].price > minPrice &&
        this.influencers[i].price < maxPrice
      ) {
        if (
          this.influencers[i].engagement_rate > minEngagementRate &&
          this.influencers[i].engagement_rate < maxEngagementRate
        ) {
          if (
            this.influencers[i].followers > minFollowers &&
            this.influencers[i].followers < maxFollowers
          ) {
            if (this.influencers[i].gender == gender && gender != 'all') {
              if (this.influencers[i].marital_status == maritalStatus) {
                if (this.influencers[i].children == children) {
                  this.filteredInfluencers.push(this.influencers[i]);
                }
              }
            } else if (gender == 'all') {
              if (this.influencers[i].marital_status == maritalStatus) {
                if (this.influencers[i].children == children) {
                  this.filteredInfluencers.push(this.influencers[i]);
                }
              }
            }
          }
        }
      }
    }

    // console.log(this.filteredInfluencers);

    // this.influencerService.getFilter ({
    //   "minAge": minAge,
    //   "maxAge": maxAge,
    //   "minPrice": minPrice,
    //   "maxPrice": maxPrice,
    //   "minEngagementRate": minEngagementRate,
    //   "maxEngagementRate": maxEngagementRate,
    //   "minFollowers": minFollowers,
    //   "maxFollowers": maxFollowers,
    //   "gender": gender,
    //   "maritalStatus": maritalStatus,
    //   "children": children,
    //   "pets": pets,
    //   "country": country,

    // })
    // console.log(this.influencerService);
    // return this.selected_categories;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
