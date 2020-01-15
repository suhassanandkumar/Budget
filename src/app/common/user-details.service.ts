import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import "rxjs/add/observable/of";
import{ catchError } from 'rxjs/operators'
import { v4 as uuid } from 'uuid';

import { userCredentials } from './models/userDetails';
import { from, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {
  public userData: userCredentials[];
  public userDat: any;
  public userDataKey: string[];
  public loggedInit = {id: "", name: "", password: "", email: ""};
  public loggedUser: userCredentials;
  public server = 'http://localhost:3001/';
  public apiUrl = 'users/';
  public serverWithApiUrl = this.server + this.apiUrl;
  public setSpinner: boolean = false;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.getAll();
  }

  getAll() {
    this.httpClient.get(this.serverWithApiUrl).subscribe((response) => {
      console.log("get API calling : ", response);
      this.userDat = response;
      this.userData = this.userDat;
      this.userDataKey = Object.keys(this.userData);
    });
  }

  addUser(userDetails: userCredentials) {
    return this.httpClient.post(this.serverWithApiUrl, userDetails, httpOptions)
    .pipe(catchError(this.handleError))
  }

  updateUser(userDetails: userCredentials){
    let updateURL = this.serverWithApiUrl + userDetails.id;
    return this.httpClient.put(updateURL, userDetails, httpOptions)
    .pipe(catchError(this.handleError))
  }

  deleteUser(userId){
    let deleteURL = this.serverWithApiUrl + userId;
    return this.httpClient.delete(deleteURL)
    .pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse):any {
    return Observable.of(error);
  }

  uuid() {
    return uuid();
  }
}
