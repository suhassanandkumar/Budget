import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../user-details.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';

import { AppComponent } from 'src/app/app.component';
import { DialogModal } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  animal: string;
  name: string;

  constructor(private dialog: MatDialog,private router: Router, private spinner: AppComponent, private userService: UserDetailsService) { }

  ngOnInit() { }

  logout() {
    this.userService.loggedUser = this.userService.loggedInit;
    localStorage.removeItem('token');
    this.router.navigateByUrl('login');
    alert("You've Logged out the session");
  }

  deleteUser(){
    console.log("logged users details : ", this.userService.loggedUser);

    const dialogRef = this.dialog.open(DialogModal, {
      width: '1000px',
      data: { name: this.userService.loggedUser, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
      if (result) {
        this.spinner.setSpinner = true;
        this.userService.deleteUser(result).subscribe(res => {
          if (res['status'] === 200) {
            console.log(res['error'].text);
            this.userService.getAll();
            this.userService.loggedUser = this.userService.loggedInit;
            localStorage.removeItem('token');
            this.router.navigateByUrl('login');
          }
        })
        this.userService.setSpinner = false;
      }
    });
  }
}
