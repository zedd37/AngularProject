import { Component, OnInit } from '@angular/core';
import { createUrlTreeFromSnapshot } from '@angular/router';
import { CampaignsService } from 'src/app/Services/campaigns.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-pending-campaigns',
  templateUrl: './pending-campaigns.component.html',
  styleUrls: ['./pending-campaigns.component.css']
})
export class PendingCampaignsComponent implements OnInit {
  constructor(private Http:HttpClient, private router:Router, private campaigns: CampaignsService) {
  }
  pendingCampaigns: any;

  ngOnInit(): void {
    let that = this;
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    this.Http.get('http://localhost:8000/api/pending', {
      headers: header,
    }).subscribe({
      next(data) {
        that.pendingCampaigns = data;
        console.log(data);
      },
      error(err) {
        console.log(err);
      },
    });
    // this.pendingCampaigns = this.campaigns.getPending().subscribe(Response => {
    //   this.pendingCampaigns = Response;
    //   console.log(Response);
    // })
  }

  target_id=0
  passIdToModal(id:number) {
    this.target_id=id;
    console.log(id)
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

  changeToCompleted(id:number){
      this.campaigns.updateStatus(id,{
        pending:0,
        completed:1,
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

  reloadPage() {
    setTimeout(()=>{
      window.location.reload();
    }, 100);
  }
}
