import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-admin-payments',
  templateUrl: './admin-payments.component.html',
  styleUrls: ['./admin-payments.component.css']
})
export class AdminPaymentsComponent implements OnInit {

  constructor(private paymentService: PaymentService, private Http: HttpClient) { }

  payments:any;

  ngOnInit(): void {
    this.show();
  }

  // showPayments() {
  //   this.payments = this.paymentService
  //     .getAllPayments()
  //     .subscribe((payment) => {
  //       this.payments = payment;
  //       console.log(this.payments);
  //     });
  // }


  show(){
    const header = new HttpHeaders({
      Authorization: `Bearer ${sessionStorage.getItem('token')}`,
    });
    let that = this;
    this.Http.get('http://localhost:8000/api/payments', {
      headers: header,
    }).subscribe({
      next(data) {
        that.payments = data;
        console.log(data);
      }
              // console.log(this.brands);

    });
  }
}
