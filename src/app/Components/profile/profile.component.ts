import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/brand.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public service: BrandService) {

  }
  brands: any;
  data: any;

  getBrandData(brandId: any) {
    let that = this;

     this.service.getBrand(brandId).subscribe(
      {
        next(data) { that.brands = data },
        error(err) { console.log(err) }
      },

    );
    // this.data = brandId;
    // return this.data;
    console.log(this.brands);
  }

  ngOnInit(): void {
    let that = this;

    this.service.getAllBrands().subscribe(
      {
        next(data) { that.brands = data },
        error(err) { console.log(err) }
      },

    );
  }

}
