import { Component, OnInit } from '@angular/core';
import { loginService } from './login.service';
import { Router } from '@angular/router';
import { sharedService } from '../sharedService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 merchant = {};
 merchantExists = false;
 loginResponse;
 callComplete = false;
  constructor(private router :Router,private loginService:loginService,private sharedService :sharedService) { }

  ngOnInit() {
  
  

  }

  loginMerchant(){
    this.loginService.loginMerchant(this.merchant).subscribe(
      response => {
      this.callComplete = true;
      if(response!=null){
       this.loginResponse = response;
       this.merchantExists = true; 
       this.sharedService.setData(this.loginResponse[0]);
       this.router.navigate(['/loyalty']);
      }else{
        this.router.navigate(['/login']);
      }
      
      })
  }

 

}
