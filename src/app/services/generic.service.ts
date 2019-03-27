import {Observable} from "rxjs";
import {RestHelper} from "../helpers/rest-helper";
import {Http, RequestOptions} from "@angular/http";
import {Configuration} from "../app.config";
import {HttpClient} from "@angular/common/http";

export class GenericRestService<T> {

  protected url: string;
  protected http: HttpClient;
  protected appConfig: Configuration;

  constructor(appUrl: string, _http: HttpClient, config: Configuration) {
    this.http = _http;
    this.appConfig = config;
    this.url = appUrl;
  }

  getAll(): Observable<T[]> {
    return this.http
      .get(this.url, this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  getByID(id: string): Observable<T> {
    return this.http
      .get(this.url + '/' + id, this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  add(data: T): Observable<void> {
    return this.http
      .post(this.url,
        (data), this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  update(data: T): Observable<void> {
    return this.http
      .put(this.url,
        (data), this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  getAllPendingList(): Observable<T[]> {
    return this.http
      .get(this.url + '/pending', this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  getPendingDetailByID(id: string): Observable<T> {
    return this.http
      .get(this.url + '/pending/' + id, this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  approve(data: T,code:string): Observable<void> {
    return this.http
      .post(this.url + '/pending/'+code+'/approve',
        (data), this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  reject(data: T,code:string): Observable<void> {
    return this.http
      .put(this.url + '/pending/'+code+'/reject',
        (data), this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }
  getPendingCount(): Observable<T> {
    return this.http
      .get(this.url + '/pendingcount' , this.appConfig.getRequestOptions())
      .map(RestHelper.extractData, this.appConfig.getRequestOptions())
      .catch(RestHelper.handleError);
  }
}
