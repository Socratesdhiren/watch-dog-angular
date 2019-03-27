import {Injectable} from "@angular/core";
import {Configuration} from "../app.config";
import {RestHelper} from "../helpers/rest-helper";
import {Observable} from "rxjs";
import {CookieService} from "./cookie.service";
import {LoginModel, Status} from "../models/login";
import {LoginResponseModel} from "../models/login-response-model";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthenticationService {
    private apiUrl = '';

    constructor(private http: HttpClient, private appConfig: Configuration,private cookie:CookieService) {
        this.apiUrl = this.appConfig.apiUrl ;

    }

    login(login: LoginModel): Observable<LoginResponseModel> {
        return this.http
            .post(this.apiUrl + '/login',
                (login),
                this.appConfig.getRequestOptions())
            .map(RestHelper.extractData, this.appConfig.getRequestOptions())
            .catch(RestHelper.handleError);
    }

  // checkStatus(): Observable<any> {
  //   return this.http
  //     .get(this.apiUrl + '/check',
  //       this.appConfig.getRequestOptions())
  //     .map(RestHelper.extractData, this.appConfig.getRequestOptions())
  //     .catch(RestHelper.handleError);
  // }
  // registerDevice(reg: Status): Observable<void>{
  //   return this.http
  //     .post(this.apiUrl + '/device/register',
  //       (reg),
  //       this.appConfig.getRequestOptions())
  //     .map(RestHelper.extractData, this.appConfig.getRequestOptions())
  //     .catch(RestHelper.handleError);
  // }
  // activateDevice(reg: Status): Observable<void>{
  //   return this.http
  //     .post(this.apiUrl + '/device/activate',
  //       (reg),
  //       this.appConfig.getRequestOptions())
  //     .map(RestHelper.extractData, this.appConfig.getRequestOptions())
  //     .catch(RestHelper.handleError);
  // }


  logout() {
        localStorage.removeItem(this.appConfig.CURRENT_USER);
        console.log(" Logout .... ");
        //sessionStorage.removeItem("CURRENTUSER");
        this.cookie.deleteAll(this.appConfig.COOKIE_NAME);
        this.cookie.delete(this.appConfig.COOKIE_NAME);


    }
}
