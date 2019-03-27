/**
 * Created by surajchhetry on 4/2/17.
 */
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {LoginResponseModel} from "../models/login-response-model";
import {HttpResponse} from "@angular/common/http";

export class RestHelper {

  // public static extractData(res: any) {
  //   console.log(" RESff :: " + res);
  //   if (res.headers.get('X-XSRF-TOKEN')) {
  //     if (sessionStorage.CURRENTUSER) {
  //       var currentUser = new LoginResponseModel();
  //       currentUser = JSON.parse(sessionStorage.CURRENTUSER);
  //       currentUser.authKey = res.headers.get('X-XSRF-TOKEN');
  //       sessionStorage.CURRENTUSER = JSON.stringify(currentUser);
  //     }
  //   }
  //   let response: RestResponse = new RestResponse()
  //   return response.data;
  // }

  public static extractData(res: any) {
    console.log(res );

    let response: RestResponse = new RestResponse()
    response = res;
    console.log(response );
    return response.data;
  }

  public static extractResponse(res: any) {
    let response: RestResponse = new RestResponse()
    return response;
  }

  public static handleError(error: HttpResponse<any>|any) {
    var errorMsg: string;

    if ( error instanceof HttpResponse) {
      if ( error.status === 0) {
        errorMsg = 'Unable to connect with server';

      }
      else {
        const response = error;
        errorMsg = response.body.error;
        return Observable.throwError(response);
      }
    }else {
      errorMsg = error.error;
    }
    return Observable.throwError(errorMsg);
  }

}

export class RestResponse {
  code: number;
  message: string;
  data: any;
}
