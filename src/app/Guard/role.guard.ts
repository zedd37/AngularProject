import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  brand: any ;
  constructor(private Http:HttpClient){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
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
    if (this.brand.data.isAdmin) {
      return true;
    }else{
      return false;
    }
    
  }
  
}
