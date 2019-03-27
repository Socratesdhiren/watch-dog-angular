import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Configuration} from '../app.config';
import {CookieService} from "./cookie.service";
import {LoginResponseModel} from "../models/login-response-model";
import {RestResponse} from "../helpers/rest-helper";
import {AuthenticationService} from "./authentication.service";


@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(private router: Router, private config: Configuration, private auth: AuthenticationService, private cookie: CookieService) {
  }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return true;
    // if (this.cookie.isExists(this.config.COOKIE_NAME) && localStorage.getItem(this.config.CURRENT_USER)) {
    //   console.log("check cookie name"+this.config.COOKIE_NAME);
    //   return true;
    // }
    // this.auth.logout();
    // console.log("check cookie name 1");
    // this.router.navigate(['/login']);
    // return false;
  }

}


