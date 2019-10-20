import { HttpClient ,HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";


@Injectable()
export class loginService{
  
    constructor(private http: HttpClient){

    }

    loginMerchant(merchant){
       
              return this.http.get("/loyalty/getMerchant/"+merchant.userName+"/"+merchant.password);

    }
   
}