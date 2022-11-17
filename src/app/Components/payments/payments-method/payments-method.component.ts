import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments-method',
  templateUrl: './payments-method.component.html',
  styleUrls: ['./payments-method.component.css']
})
export class PaymentsMethodComponent implements OnInit {

  constructor() { }

  payCardDiv = true;

  toggleDisplayDiv() {
    this.payCardDiv = !this.payCardDiv;
  }

  ngOnInit(): void {
  }

}
