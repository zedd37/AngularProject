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
  constructor(private router: Router) {}

  canActivate() {
    let isAdmin = sessionStorage.getItem('isAdmin');
    if (isAdmin == '0') {
      this.router.navigate(['profile']);
      alert("you don't have permission");

      return false;
    }

    return true;
  }
}
