import {Injectable} from "@angular/core";
import {GenericRestService} from "./generic.service";
import {Branch} from "../models/branch";
import {Http} from "@angular/http";
import {Configuration} from "../app.config";
import {Observable} from "rxjs/Rx";
import {RestHelper} from "../helpers/rest-helper";
import {HttpClient} from "@angular/common/http";
import {Products} from "../models/product";

@Injectable()
export class ProductService {
  private apiUrl = 'https://api-trademan.appspot.com/products'


  private testUrl = 'https://gotest-184708.appspot.com/';
  constructor(private  _http: HttpClient, private config: Configuration) {
  }
  postTest(data): Observable<any[]> {
    console.log("data");
    return this._http
      .post(this.testUrl, data, this.config.getRequestOptions())
      .map(RestHelper.extractData, this.config.getRequestOptions())
      .catch(RestHelper.handleError);
  }




  getProducts(): Observable<any[]> {
    return this._http
      .get(this.apiUrl, this.config.getRequestOptions())
      .map(RestHelper.extractData, this.config.getRequestOptions())
      .catch(RestHelper.handleError);
  }
  getProductByCode(id: string): Observable<any[]> {
    return this._http
      .get(this.apiUrl + id, this.config.getRequestOptions())
      .map(RestHelper.extractData, this.config.getRequestOptions())
      .catch(RestHelper.handleError);
  }
  getProductByGroupId(id: string): Observable<any[]> {
    return this._http
      .get(this.apiUrl +'/groups/' + id +'/', this.config.getRequestOptions())
      .map(RestHelper.extractData, this.config.getRequestOptions())
      .catch(RestHelper.handleError);
  }
  getProductByItem(id: string): Observable<any[]> {
    return this._http
      .get(this.apiUrl +'/groups/' + id , this.config.getRequestOptions())
      .map(RestHelper.extractData, this.config.getRequestOptions())
      .catch(RestHelper.handleError);
  }

  postProductByGroupId(data: Products): Observable<any[]> {
    console.log("serveice data", data);
    return this._http
      .post(this.apiUrl + '/groups', data, this.config.getRequestOptions())
      .map(RestHelper.extractData, this.config.getRequestOptions())
      .catch(RestHelper.handleError);
  }
  postProductByItemId(data: Products): Observable<any[]> {
    return this._http
      .post(this.apiUrl + '/groups', data, this.config.getRequestOptions())
      .map(RestHelper.extractData, this.config.getRequestOptions())
      .catch(RestHelper.handleError);
  }

}
