import { Injectable } from '@angular/core';
import {UserProfileUpdate} from "app/models/user-profile";
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {Configuration} from "../app.config";
import {RestHelper} from "../helpers/rest-helper";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProfileService {
  apiUrl:string;

  constructor(private config:Configuration,private http:HttpClient) {
    this.apiUrl=config.apiUrl+'/users';
  }



  changePassword(changePasswordRequest:UserProfileUpdate):Observable<any>{
    return this.http
      .post(this.apiUrl + '/changepassword' ,changePasswordRequest,
        this.config.getRequestOptions())
      .map(RestHelper.extractData, this.config.getRequestOptions())
      .catch(RestHelper.handleError);

  }

}
