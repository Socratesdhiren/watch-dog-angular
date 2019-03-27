import {Injectable} from "@angular/core";
import {GenericRestService} from "./generic.service";
import {Branch} from "../models/branch";
import {Http} from "@angular/http";
import {Configuration} from "../app.config";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class BranchService  extends GenericRestService<Branch>{
  private apiUrl: string;
  constructor(_http: HttpClient, config: Configuration) {
    super(config.apiUrl +  '/branches', _http, config );
    this.apiUrl = config.apiUrl + '/branches';
  }
}
