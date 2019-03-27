import { Injectable } from '@angular/core';
import {Configuration} from "../app.config";
import {Observable} from "rxjs/Observable";
import {RestHelper} from "../helpers/rest-helper";
import {Payment, PaymentResponse, TransactionLog} from "../models/transaction";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class TransactionsService {
  private apiUrl: string;
  constructor(private _http: HttpClient, private config: Configuration) {
    this.apiUrl = config.apiUrl ;
  }

  getTranLog(): Observable<TransactionLog> {
    return this._http
      .get(this.apiUrl + '/tranlog', this.config.getRequestOptions())
      .map(RestHelper.extractData, this.config.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  paymentRequest(data: Payment): Observable<PaymentResponse> {
    console.log("Inside service", data);
    return this._http
      .post(this.apiUrl + '/payment-request',
        (data), this.config.getRequestOptions())
      .map(RestHelper.extractData, this.config.getRequestOptions())
      .catch(RestHelper.handleError);
  }
}

