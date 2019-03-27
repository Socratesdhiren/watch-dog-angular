import { LoginResponseModel } from './../../../models/login-response-model';
import { LoginModel, Status } from './../../../models/login';
import { Configuration } from './../../../app.config';
import { AuthenticationService } from './../../../services/authentication.service';
import { CookieService } from './../../../services/cookie.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Message, Messages} from 'primeng/primeng';
import { BaseForm } from '../../../helpers/component-helper';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent extends BaseForm implements OnInit {
  loginModel: LoginModel = new LoginModel();
  showLoading: boolean = false;
  msgs: Message[];
  data: string;
  register: Status = new Status();
  showLogin: boolean= false;
  bankCode: string;

  constructor(protected _router: Router,private cookieService: CookieService, private auth: AuthenticationService, private config: Configuration) {
    super(_router);
  }

  isValid(): boolean {
    if (this.loginModel.username === '' ) {
      this.displayErrorMsg("Please enter username");
      return false;
    }
    if (this.loginModel.password === '') {
      this.displayErrorMsg("Please enter password");
      return false;
    }
    if ((this.loginModel.username==='dhiren') && (this.loginModel.password==='dhiren27') )
      {
        return true;
      } else {
        this.displayErrorMsg("Please Enter the Valid username &&  password");
      }
    
  }
  ngOnInit() {
    if(this.doesUserAlreadyLogin()) {
      this._router.navigate(['/home']);
    }else {
      // return;
      this.logout();
    }
  }


  logout() {
    this.auth.logout();
  }

  private doesUserAlreadyLogin(): boolean {
    if(localStorage.getItem(this.config.CURRENT_USER) && this.cookieService.isExists(this.config.COOKIE_NAME))
      return true;
    return false;
  }

  protected  execute(){
    let identity = new LoginResponseModel()
    if (this.doesUserAlreadyLogin()) {
      this._router.navigate(['/home']);

    } else {
      this.auth.logout();
      this.showLoading = true;
      console.log("inside login");
      localStorage.setItem(this.config.CURRENT_USER, JSON.stringify( {userName: "User",
        authKey: "auth-key",
      fullName: "Test User"}));
      this._router.navigate(['/home']);
      // this.auth.login(this.loginModel)
      //   .subscribe(
      //     data => {
      //      this.showLoading = false;
      //       console.log("post login data::"+JSON.stringify(data));
      //       Object.assign(identity, data);
      //       localStorage.setItem(this.config.CURRENT_USER, JSON.stringify(identity));
      //       console.log("current user set"+ this.config.CURRENT_USER);
      //
      //       this._router.navigate(['/home']);
      //       console.log("route");
      //     },
      //     error => {
      //       this.displayErrorMsg(error.message);
      //       this.showLoading = false;
      //
      //     },
      //     () => {
      //
      //     }
      //   );
    }
  }

}

