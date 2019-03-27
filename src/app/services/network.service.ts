import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(private _http:HttpClient) { 

  }

  getnetwork(): Observable<any>{
    return this._http.get('http://localhost:8000/network');
    }
}