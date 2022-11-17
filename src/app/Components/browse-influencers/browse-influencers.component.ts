import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InfluencerService } from 'src/app/Services/influencer.service';

@Component({
  selector: 'app-browse-influencers',
  templateUrl: './browse-influencers.component.html',
  styleUrls: ['./browse-influencers.component.css'],
})
export class BrowseInfluencersComponent implements OnInit {
  brand: any;
  constructor(private influencerService: InfluencerService, private Http: HttpClient,) {}

  influencers: any;
  filteredInfluencers: any = [];
  // selected_categories:any ={};

  ngOnInit(): void {
    this.showInfluencers();
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    let that = this;
    this.Http.get('http://localhost:8000/api/brand', {
      headers: header,
    }).subscribe({
      next(data) {
        that.brand = data;
        console.log(data);
      },
      error(err) {
        console.log(err);
      },
    }); 
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
            if (this.influencers[i].gender == gender) {
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
}
