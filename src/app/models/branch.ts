import {CommonAttribute} from './commonAttribute';
export class Branch extends CommonAttribute {
   requestToken:   string;
   remark:         string;
   name:           string;
   code:           string;
   contactPerson:  string;
   email:          string;
   mobile:         number;
   active:         boolean = true;
}
