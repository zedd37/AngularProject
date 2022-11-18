import { Component, OnInit } from '@angular/core';
import { InfluencerService } from 'src/app/services/influencer.service';

@Component({
  selector: 'app-admin-influencers',
  templateUrl: './admin-influencers.component.html',
  styleUrls: ['./admin-influencers.component.css']
})
export class AdminInfluencersComponent implements OnInit {

  constructor(private influencerService: InfluencerService) { }

  influencers: any;

  ngOnInit(): void {
    this.showInfluencers();
  }

  showInfluencers() {
    this.influencers = this.influencerService
      .listInfluencers()
      .subscribe((influencer) => {
        this.influencers = influencer;
        // console.log(this.influencers);
      });
  }

  DeleteInfluencer(i:number){

  }

}
