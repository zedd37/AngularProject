import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginAuthService } from '../Components/Services/login-auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: LoginAuthService, private router: Router) {}
  canActivate() {
    if (this.auth.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['auth']);
    return false;
  }
}
