import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { transactDetails, transactDetailsBasic } from '../../models/userDetails';
import { UserDetailsService } from '../../user-details.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TransactService {

  public serverUrl = 'http://localhost:3001/data/';
  public transRaw: any;
  public transact: transactDetails[];
  public transactFiltered: transactDetailsBasic[];
  public transDataKey: string[];
  public id;
  public idTrans;
  public transData = [];
  public tableBind;

  constructor(private httpClient: HttpClient, private userService: UserDetailsService) {
    this.getAll();
  }

  getAll() {
    const that = this;

    this.httpClient.get(this.serverUrl)
      .subscribe(response => {
        this.transRaw = response;

        //get userID key
        this.transDataKey = Object.keys(this.transRaw);
        //compare userID key with logged userID
        this.transDataKey.filter(key => {
          if (key === that.userService.loggedUser.id) {
            //copy userID key values to an var
            this.idTrans = that.transRaw[key];
            //get transaction ID's for Array-object
            this.id = Object.keys(this.idTrans);
            //assign transaction values to array variable
            this.id.map(function (res, index) {
              that.transData[index] = that.idTrans[res];
              that.tableBind = new MatTableDataSource(that.transData);
              console.log("Transdata : ", that.transData);
            });
          }
        });
        console.log("Transaction details : ", this.transDataKey);
      });
  }

  addTransaction(transactDetails: transactDetails) {
    return this.httpClient.post(this.serverUrl, transactDetails, httpOptions)
      .pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse): any {
    return Observable.of(error);
  }

}
