import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { transactDetails } from '../../models/userDetails';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})

export class TransactServiceService {

  public serverUrl = 'http://localhost:3001/data/';
  public transRaw: any;
  public transact: transactDetails[];
  public transDataKey: string[];

  constructor(private httpClient: HttpClient) {
    this.getAll();
  }

  getAll() {
    this.httpClient.get(this.serverUrl)
    .subscribe(response => {
      this.transRaw = response;
      this.transact = this.transRaw;
      this.transDataKey = Object.keys(this.transact);
      console.log("Transaction details : ", this.transact);
    });
  }

  addTransaction(transactDetails: transactDetails) {
    return this.httpClient.post(this.serverUrl, transactDetails, httpOptions)
    .pipe(catchError(this.handleError))
  }

  handleError(error: HttpErrorResponse):any {
    return Observable.of(error);
  }

}
