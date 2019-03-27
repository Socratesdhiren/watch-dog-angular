import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Configuration} from "../app.config";

@Injectable({
  providedIn: 'root'
})
export class SwapdetailService {
  private apiUrl: string;

  constructor( private _http: HttpClient, private config:Configuration) {
   //super(config.apiUrl + "/swapinfo", _http, config);
    this.apiUrl = config.apiUrl + "/swapinfo";
  }
  getswapInfo(): Observable<any>{
    return this._http.get('http://localhost:8000/swapinfo');
}
}
