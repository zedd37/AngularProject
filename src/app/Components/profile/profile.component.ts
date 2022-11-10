import { Component, OnInit } from '@angular/core';
import { BrandService } from '../Services/brand.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public brand:BrandService) { }

  ngOnInit(): void {
    this.brand.getBrandInfo(1).subscribe({
      next(data){
        console.log(data);
      },
      error(err){
        console.log(err);
      }
    })
  }

}
