import { Component,OnInit,AfterViewChecked,ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
//declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  url:any;

constructor(private router:Router, private cdRef: ChangeDetectorRef){
 this.url= this.router.url

}
ngOnInit() {

}
ngAfterViewChecked() {
 console.log("after load "+this.router.url);
 
 if(this.url!=this.router.url){
  this.cdRef.detectChanges();
 }
  
}


}
