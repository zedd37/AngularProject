import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router,private Http:HttpClient) {}
  brand: any= null;
    admin = false;
  canActivate() {
      const header = new HttpHeaders({
        Authorization: `Bearer ${sessionStorage.getItem('token')}`,
      });
      let that = this;
      this.Http.get('http://localhost:8000/api/brand', {
        headers: header,
      }).subscribe({
        next(data) {
          that.brand = data;
          // if (that.brand.data.isAdmin) {
          //   that.admin = true;
          // }
        },
        error(err) {
          console.log(err);
        },
      });
    // let isAdmin = sessionStorage.getItem('isAdmin');
    if (!this.brand.data.isAdmin) {
      // this.router.navigate(['profile']);
      // alert("you don't have permission");
      return false;
    }

    return true;
  }
}
