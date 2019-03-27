import { Injectable } from '@angular/core';
import {Headers, RequestMethod, RequestOptions} from "@angular/http";
import {LoginResponseModel} from "./models/login-response-model";
import {HttpHeaders} from "@angular/common/http";

@Injectable()
export class Configuration {
  
  static domain ='localhost:8000'
   public apiUrl = 'https://'+ Configuration.domain ;
  CURRENT_USER = 'CURRENT-MERCHANT';
  COOKIE_NAME = 'XSRF-TOKEN';



  public getHeader(): HttpHeaders {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return headers;
  }

  public getRequestOptions() {
    return ({headers: this.getHeader()});
  }




public getRequestOptionsForUplaod() {
const headers = new HttpHeaders();
// headers.append('Content-Type', 'multipart/form-data');
headers.append('Accept', 'application/json');
//  headers.append('Content-Length', '67142');
return ({headers: headers});
}

}
