import { Component, OnInit } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-completed-campaigns',
  templateUrl: './completed-campaigns.component.html',
  styleUrls: ['./completed-campaigns.component.css']
})
export class CompletedCampaignsComponent implements OnInit {

  constructor(private Http:HttpClient, private router:Router, private campaigns: CampaignsService) {
  }
  completedCampaigns: any;
  ngOnInit(): void {

    let that = this;
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    this.Http.get('http://localhost:8000/api/completed', {
      headers: header,
    }).subscribe({
      next(data) {
        that.completedCampaigns = data;
        // console.log(data);
      },
      error(err) {
        console.log(err);
      },
    });

    // this.completedCampaigns = this.campaigns.getCompleted().subscribe(Response => {
    //   this.completedCampaigns = Response;
    //     // console.log(Response);
    // })
  }

  target_id=0
  passIdToModal(id:number) {
    this.target_id=id;
    console.log(id)
  }

  changeToPending(id:number){
      this.campaigns.updateStatus(id,{
        pending:1,
        completed:0,
        drafts:0
      }).subscribe(() => {
        this.router.navigateByUrl(`/campaigns`)
      });
  }

  changeToDrafts(id:number){

      this.campaigns.updateStatus(id,{
        pending:0,
        completed:0,
        drafts:1
      }).subscribe(() => {
        this.router.navigateByUrl(`/campaigns`)
      });
  }

  changeToCurrent(id:number){

    this.campaigns.updateStatus(id,{
      pending:0,
      completed:0,
      drafts:0
    }).subscribe(() => {
      this.router.navigateByUrl(`/campaigns`)
    });
  }
}

