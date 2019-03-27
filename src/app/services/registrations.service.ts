import {Configuration} from '../app.config';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {GenericRestService} from './generic.service';

@Injectable()
export class RegistrationsService extends GenericRestService<any> {
  private apiUrl: string;
  constructor(private _http: HttpClient, private config: Configuration) {
    super(config.apiUrl +  '/registrations', _http, config );
  }
}

