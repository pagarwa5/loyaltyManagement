import { HttpClient ,HttpHeaders } from "@angular/common/http";

import { Injectable } from "@angular/core";


@Injectable()
export class UserService{
  
    constructor(private http: HttpClient){

    }

    registerUser(user){
        let httpHeaders = new HttpHeaders({
            'Content-Type' : 'application/json'
            }); 
            
            let options = {
              headers: httpHeaders
            }; 
            
            let request ={
                name :user.name,
                mobile: user.mobile,
                email:user.email
            }
              return this.http.post("/loyalty/createUser",request,options);

    }
    getUserByMobile(mobile){
       
        return this.http.get("/loyalty/getUserByMobile/"+mobile);

}
   
}