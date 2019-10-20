import { HttpClient ,HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";


@Injectable()
export class LoyaltyService{
  
    constructor(private http: HttpClient){

    }

    getRule(item,merchantId){
        return this.http.get("/loyalty/getRuleByItemAndMerchant/"+item+"/"+merchantId);
    }

    createRule(rule,merchantId){
        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json'
            }); 
            
            let options = {
              headers: httpHeaders
            }; 
            
            let request ={
                item :rule.selectedItem,
                pointValue: rule.pointValue,
                points:rule.points,
                expiry:rule.expiry,
                merchantId:merchantId,
                brandName :rule.selectedBrand
                
            }
              return this.http.post("/loyalty/createRule",request,options);

    }
   
}