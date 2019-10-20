import { HttpClient, HttpErrorResponse ,HttpHeaders } from "@angular/common/http";
import { Payment } from "./payment.model";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core";


@Injectable()
export class PaymentService{
   
   
    constructor(private http: HttpClient){

    }

    makePayment(sum): any{
      
    let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json'

    /*'Access-Control-Allow-Origin': 'http://localhost:8080'*/
    }); 
    
    let options = {
      headers: httpHeaders
    }; 
     /*return this.http.post(this.url+'paypal/make/payment?sum='+sum, {})
     .map((response: Response) => response.json());}*/
     /*return this.http.post<Payment>(this.url+'/paypal/make/payment?sum='+sum,{},options) .pipe(
        catchError(this.handleError)
      );*/
      return this.http.get('/paypal/make/payment?sum='+sum);
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      };
}