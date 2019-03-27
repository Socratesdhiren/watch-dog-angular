import {Configuration} from "../app.config";
import {Observable} from "rxjs/Observable";
import {RestHelper} from "./rest-helper";
import {HttpClient} from "@angular/common/http";
export class RestClient{

  private http: HttpClient;
  private appConfig: Configuration;

  constructor(_http: HttpClient, config: Configuration) {
    this.http = _http;
    this.appConfig = config;
  }

  getAll<T>(url: string): Observable<T[]> {
    return this.http
      .get(url, this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  get<T>(url: string): Observable<T> {
    return this.http
      .get(url, this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  post<T>(url: string,data: T): Observable<void> {
    return this.http
      .post(url,
        (data), this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  postAndGetAll<T>(url: string,data: T): Observable<any[]> {
    return this.http
      .post(url,
        (data), this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  put<T>(url: string, data: T): Observable<void> {
    return this.http
      .put(url,
        (data), this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }
}
