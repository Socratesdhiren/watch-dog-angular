import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Configuration } from '../app.config';

@Injectable()
export class OsinfosService {
  private apiUrl: string;
  constructor( private _http:HttpClient ,private config :Configuration ) {
    this.apiUrl = config.apiUrl +"/";
  }

  getosinfo(): Observable<any>{
    
    return this._http.get('http://localhost:8000')
  }
}
