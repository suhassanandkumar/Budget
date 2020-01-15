import { Component, OnInit } from '@angular/core';
import { userCredentials } from '../models/userDetails';
import { Router } from '@angular/router';

import { UserDetailsService } from './../user-details.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userCred = { name: "", password: "" };
  private userList: userCredentials[];
  public remember: boolean = false;
  private loginResult: string = "";

  constructor(private router: Router, private userService: UserDetailsService) { }

  ngOnInit() { 
    if(sessionStorage.getItem('token')){
      this.userCred.name = sessionStorage.getItem('token');
    }
  }

  private fillDetails() {
    return ({ id: '001', name: 'Suhas', password: '0102', email: "suhas@gmail.com" });
  }

  private logintoApp() {
    this.userList = this.userService.userDat;
    var user = this.userCred;
    var loginResult = false;
    
    if (this.userCred.name && this.userService.userDataKey.length){
      this.userService.userDataKey.filter( key => {
        if(this.userList[key].name.toLocaleLowerCase() === user.name.toLocaleLowerCase() && this.userList[key].password === user.password){
          this.userService.loggedUser = this.userList[key];
          localStorage.setItem('token', user.name);
          this.remember ? sessionStorage.setItem('token', user.name) : null;
          loginResult = true;
          this.router.navigateByUrl("home");
        }
      });
      loginResult ? this.loginResult ="Login Successfull" : this.loginResult = "Login Un-Successfull";
    }
  }

}
