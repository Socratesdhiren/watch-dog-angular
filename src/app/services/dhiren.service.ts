import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {TableModule} from 'primeng/table';

@Injectable({
  providedIn: 'root'
})
export class DhirenService {

  constructor(private _http:HttpClient) { }
 
 getProcessInfo(): Observable<any>{
  return this._http.get('http://localhost:8000/procinfo');
}


}
