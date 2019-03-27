/**
 * Created by santosh on 6/18/17.
 */

import {Injectable} from "@angular/core";
import {GenericRestService} from "./generic.service";
import {Http} from "@angular/http";
import {Configuration} from "../app.config";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class AuthorizationMsgService {
  private apiUrl: string;
  constructor(_http: HttpClient, config: Configuration) {
    //super(config.apiUrl +  '/', _http, config );
    this.apiUrl = config.apiUrl + '/';
  }
}


