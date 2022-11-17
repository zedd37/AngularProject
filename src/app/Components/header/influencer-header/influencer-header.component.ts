import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-influencer-header',
  templateUrl: './influencer-header.component.html',
  styleUrls: ['./influencer-header.component.css']
})
export class InfluencerHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout() {
    sessionStorage.clear();
    this.router.navigate(['/']);
  }
}
