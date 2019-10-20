import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  merchant={};
  merchantExists = false;
 registerResponse;
  constructor(private registerService :RegisterService,private router :Router) { 

  }

  ngOnInit() {
   
  }

  registerMerchant(){
    console.log("registering");
    this.registerService.registerMerchant(this.merchant).subscribe(
      response => {
        if(response!=null){
          this.registerResponse = response;
          this.router.navigate(['/login']);
        }else{
           this.merchantExists =true;
           this.router.navigate(['/register']);
        }
        
      });
  }
}
