import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  url:string = 'localhost:8000/api/payments'
  constructor(private http:HttpClient) { }

  getAllPayments() {
    return this.http.get(this.url);
  }
}
