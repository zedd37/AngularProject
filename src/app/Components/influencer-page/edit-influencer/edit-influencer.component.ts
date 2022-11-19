import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfluencerService } from 'src/app/services/influencer.service';

@Component({
  selector: 'app-edit-influencer',
  templateUrl: './edit-influencer.component.html',
  styleUrls: ['./edit-influencer.component.css']
})
export class EditInfluencerComponent implements OnInit {

  constructor(private Http: HttpClient, private influencerService: InfluencerService, private router: Router) { }
  influencer: any = null
  ngOnInit(): void {
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    let that = this;
    this.Http.get('http://localhost:8000/api/influencer', {
      headers: header,
    }).subscribe({
      next(data) {
        that.influencer = data;
        console.log(that.influencer.email);
      },
      error(err) {
        console.log(err);
      },
    });
  }
  UpdateBrand(fname: any, lname: any, industry: any, location: any, phone: any, email: any, facebook: any, instagram: any, tikTok: any, youTube: any, birthDay: any, gender: any, nationality: any, status: any, kids: any, pets: any, about: any) {
    this.influencerService.updateInfluencer(this.influencer.id, {
      fname: fname,
      lname: lname,
      email: email,
      phone: phone,
      occupation: industry,
      instagram: instagram,
      facebook: facebook,
      age: birthDay,
      gender: gender,
      children: kids,
      country: location,
    }).subscribe()

    this.router.navigateByUrl(`/influencer-page`);



  }

}
