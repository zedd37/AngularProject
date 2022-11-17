import { Component, OnInit } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.component.html',
  styleUrls: ['./drafts.component.css'],
})
export class DraftsComponent implements OnInit {

  constructor(private Http:HttpClient, private router:Router, private campaigns: CampaignsService) {
  }
  drafts: any;

  ngOnInit(): void {
    let that = this;
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    this.Http.get('http://localhost:8000/api/drafts', {
      headers: header,
    }).subscribe({
      next(data) {
        that.drafts = data;
        console.log(data);
      },
      error(err) {
        console.log(err);
      },
    });

    // this.drafts = this.campaigns.getDrafts().subscribe(Response => {
    //   this.drafts = Response;
    //   // console.log(Response);
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

  changeToCompleted(id:number){
      this.campaigns.updateStatus(id,{
        pending:0,
        completed:1,
        drafts:0
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

  draftCampaigns: any;

  DeleteCampaign(id:number) {
      this.campaigns.deleteCampaign(id).subscribe((campaign:any) => {
        });
    }
  }
