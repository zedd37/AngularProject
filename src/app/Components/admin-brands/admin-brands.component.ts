import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { BrandService } from '../Services/brand.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-admin-brands',
  templateUrl: './admin-brands.component.html',
  styleUrls: ['./admin-brands.component.css']
})
export class AdminBrandsComponent implements OnInit {

  constructor(private brandService: BrandService,private Http: HttpClient,) {}

  brands: any;

  ngOnInit(): void {
    this.showBrands();
  }

  // showBrands() {
  //   this.brands = this.brandService
  //     .getAllBrands()
  //     .subscribe((brand) => {
  //       this.brands = brand;
  //       // console.log(this.influencers);
  //     });
  // }
  showBrands() {
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    let that = this;
    this.Http.get('http://localhost:8000/api/brands', {
      headers: header,
    }).subscribe({
      next(data) {
        that.brands = data;
        console.log(data);
      },
      error(err) {
        console.log(err);
      },
              // console.log(this.brands);

    });

  }



  DeleteBrand(id:number) {
    // console.log(id);
    if (confirm('Are you sure to delete?')) {
      this.brandService.deleteBrand(id).subscribe((brand:any) => {

          this.ngOnInit();
        })
      };
    }
}
