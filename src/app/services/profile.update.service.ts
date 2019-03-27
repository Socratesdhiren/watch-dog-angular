import { Injectable } from '@angular/core';
import {Configuration} from "../app.config";
import {Observable} from "rxjs/Observable";
import {RestHelper} from "../helpers/rest-helper";
import {Payment, PaymentResponse, TransactionLog} from "../models/transaction";
import {HttpClient} from "@angular/common/http";
import {GenericRestService} from './generic.service';
import {User} from "../models/user";
import { RestClient } from '../helpers/rest.client';
import { Profile } from 'selenium-webdriver/firefox';
import { ChangePasswordModel } from '../models/profile';

@Injectable()
export class ProfileUpdateService {
    private apiUrl: string;
    constructor(private _http: HttpClient, private config: Configuration) {
      this.apiUrl = config.apiUrl ;
    }

   

    updatePassword(data): Observable<any[]> {
      console.log("NOT HAPPY");
        return this._http
          .put(this.apiUrl + '/users/changePassword',
            (data), this.config.getRequestOptions())
          .map(RestHelper.extractData, this.config.getRequestOptions())
          .catch(RestHelper.handleError);
      }
      
}


    
