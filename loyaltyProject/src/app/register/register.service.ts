import { HttpClient ,HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";


@Injectable()
export class RegisterService{
  
    constructor(private http: HttpClient){

    }

    registerMerchant(merchant){
        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json'
            }); 
            
            let options = {
              headers: httpHeaders
            }; 
            
            let request ={
                merchantName :merchant.name,
                userName: merchant.userName,
                password:merchant.password
            }
              return this.http.post("/loyalty/createMerchant",request,options);

    }
   
}