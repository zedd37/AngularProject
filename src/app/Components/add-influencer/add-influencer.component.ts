import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { InfluencerService } from 'src/app/services/influencer.service';

@Component({
  selector: 'app-add-influencer',
  templateUrl: './add-influencer.component.html',
  styleUrls: ['./add-influencer.component.css']
})
export class AddInfluencerComponent implements OnInit {

  constructor(private InfluencerService:InfluencerService, private router:Router) { }

  influencer: any = null;

  ngOnInit(): void {
  }

  AddInfluencer(fname:any,lname:any,email:any,password:any,phone:any,instagram:any,occupation:any,facebook:any,snapchat:any,age:any,
    price:any,gender:any,followers:any,marital_status:any,children:any,country:any){

    // console.log(fname);

    this.influencer = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      phone: phone,
      instagram: instagram,
      occupation:occupation,
      facebook:facebook,
      snapchat:snapchat,
      age:age,
      price:price,
      gender:gender,
      followers:followers,
      marital_status:marital_status,
      children:children,
      country:country,
    }
    this.InfluencerService.addInfluencer(this.influencer).subscribe(a=>
      this.influencer = a
      );

    this.router.navigateByUrl(`/admin-panel/influencers`);

  }

}
