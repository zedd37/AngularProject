import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { LoginAuthService } from './Components/Services/login-auth.service';
import { RoleGuard } from './Guard/role.guard';
import { Observable, interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private Http: HttpClient,
    public loginAuth: LoginAuthService,
    public IsAdmin: RoleGuard,
    public isAdmin:LoginAuthService
  
  ) {}
  brandAdmin: any= this.isAdmin.isadmin();

  ngOnInit(): void {
    console.log(this.isAdmin.isadmin())
  }

  title = 'AngularProject';
}
