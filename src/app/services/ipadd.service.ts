import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class IpAddService {

  constructor( private _http:HttpClient) {}

  getipInfo(): Observable<any>{
    return this._http.get('http://localhost:8000/localAdd')
  }
}
