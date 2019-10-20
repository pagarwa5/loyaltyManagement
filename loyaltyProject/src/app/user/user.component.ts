import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { sharedService } from '../sharedService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user ={};
  userResponse;
  userExists;
  userCreate =false;
  mobile;
  usersByMobile;
  usersEmpty=true;
  userCallDone = false;
  constructor(private userService:UserService,private router:Router ,private sharedService:sharedService) { }

  ngOnInit() {
  }
  registerUser(){
    console.log("registering");
    this.userService.registerUser(this.user).subscribe(
      response => {
        if(response!=null){
          this.userResponse = response;
    
        }else{
           this.userExists =true;
          // this.router.navigate(['/register']);
        }
        
      });
  }
  getUserByMobile(){
    console.log("user by mob service");
    this.userService.getUserByMobile(this.mobile).subscribe(
      response => {
       this.userCallDone=true;
        if(response!=null){
          this.usersEmpty= false;
          this.usersByMobile = response;
          this.sharedService.setUserDetails(this.usersByMobile);
          console.log(this.usersByMobile);
        }else{
          this.usersEmpty = true;
        }       
      }
    )
  }
}
