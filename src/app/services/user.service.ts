import { User} from "../models/user";
import {Injectable} from "@angular/core";
import {Observable, ReplaySubject} from "rxjs/Rx";
import {Http, RequestOptions} from "@angular/http";
import {RestHelper} from "../helpers/rest-helper";
import {Configuration} from "../app.config";
import {GenericRestService} from "./generic.service";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class UserService extends GenericRestService<User>{
    public currentUser: ReplaySubject<User> = new ReplaySubject<User>(1);
    private apiUrl: string;

    public setCurrentUser(user: User) {
        this.currentUser.next(user);
    }

    constructor(_http: HttpClient, config: Configuration) {
        super(config.apiUrl + "/users", _http, config);
        this.apiUrl = config.apiUrl + "/users";
      }

  getByParent(parent: string): Observable<User[]> {
    return this.http
      .get(this.url + '/' + parent, this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  getByUserId(id: string): Observable<User> {
    return this.http
      .get(this.url + '/' + id + '/detail', this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }



}
