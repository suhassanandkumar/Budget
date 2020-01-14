import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserDetailsService } from './../user-details.service';
import { userCredentials } from '../models/userDetails';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public userCred: userCredentials = { id: "", name: "", password: "", email: "" };
  private userData: userCredentials[];
  private repassword = { "newpassword": "", "rePassword": "" };
  private formTitle = "Registeration Form";
  private registerBtn = "Register";

  constructor(private userService: UserDetailsService, private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.userData = this.userService.userData;
      if (localStorage.getItem('token')) {
        this.userService.userDataKey.filter(key => {
          if (this.userData[key].name.toLocaleLowerCase() === localStorage.getItem('token').toLocaleLowerCase()) {
            this.userCred = this.userData[key];
            this.router.navigateByUrl('edit');
            this.formTitle = "Update Details";
            this.registerBtn = "Save";
          }
        })
      }
    }, 100);
  }

  registertoApp() {
    if (this.userCred.name) {
      if ((this.userCred.password && this.repassword.rePassword) && (this.userCred.password === this.repassword.rePassword)) {
        console.log("Hello");
        this.userCred.id = this.userService.uuid();
        this.userService.addUser(this.userCred).subscribe(res => {
          if (res['status'] === 200) {
            console.log(res['error'].text, " : ", this.userCred.name);
            this.userService.getAll();
            this.userService.loggedUser = this.userCred;
            localStorage.setItem('token', this.userCred.name);
            this.router.navigateByUrl('/home');
          }
        });
      } else {
        alert('password and verify-password should be entered & same');
      }
    } else {
      alert("User Name field can't be empty");
    }
  }

  updateUserDetails() {
    if (this.repassword.rePassword && this.repassword.newpassword && this.repassword.rePassword === this.repassword.newpassword) {
      this.userCred.password = this.repassword.rePassword;
    }
    this.userService.updateUser(this.userCred).subscribe(res => {
      if (res['status'] === 200) {
        console.log(res['error'].text);
        this.router.navigateByUrl('/home');
      }
    });
  }

  cancelEdit() {
    this.router.navigateByUrl('home');
  }

}
