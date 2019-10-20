import { Component, OnInit } from '@angular/core';
import { PaymentService } from './payment.service';
import { Payment } from './payment.model';
import { sharedService } from '../sharedService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  makePaymentResponse;
  loyaltyDetails;
  userDetails=null;
  totalAmount;
  constructor(private paymentService:PaymentService,private sharedService:sharedService,private router:Router) { }

  ngOnInit() {
  //this.loyaltyDetails = this.sharedService.getLoyaltyDetails();
  this.userDetails  = this.sharedService.userDetails;
  if(this.userDetails!=null){
    this.totalAmount = this.userDetails.points*2;
  }
  
  }

  
  makePayment(sum:any){
    sum=this.sharedService.totalSum;
    this.paymentService.makePayment(sum).subscribe(
      response => {
        this.makePaymentResponse = response;
        window.open(this.makePaymentResponse.redirect_url, "_blank");
      });
    console.log(this.makePaymentResponse);
  }

}
