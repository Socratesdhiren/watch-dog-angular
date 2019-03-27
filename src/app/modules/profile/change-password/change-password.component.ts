import { Component, OnInit } from '@angular/core';
import { BaseForm, BaseComponent } from '../../../helpers/component-helper';
import { ChangePasswordModel, InfoResponse } from '../../../models/profile';
import { ProfileService } from '../../../services/profile.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Configuration } from '../../../app.config';
import { User } from '../../../models/user';
import { ProfileUpdateService } from '../../../services/profile.update.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { LoginResponseModel } from '../../../models/login-response-model';
import { ShowLoadingService } from './../../../services/showLoading.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent extends BaseComponent implements OnInit {
  public currentUser: User = new User();
  user: User = new User();
  profile: ChangePasswordModel = new ChangePasswordModel();
  infoResponse: InfoResponse[];
  confirmPassword: string;
  // passwordModel: ChangePasswordModel = new ChangePasswordModel();
  parent: LoginResponseModel = new LoginResponseModel();
  constructor(private profileservice: ProfileService,
    private profileupdateservice: ProfileUpdateService,
    private showLoadingSerive: ShowLoadingService,
    private route: ActivatedRoute,
    protected _router: Router,
    private messageService: MessageService,
    private config: Configuration) {
    super(_router);
    this.parent = JSON.parse(sessionStorage.getItem(this.config.CURRENT_USER));
   // this.parent.fullName = 'Dhirendra'+" " +'Socrates' +" "+'Arjel';
   // this.profile.username ='Admin';
  }
  ngOnInit() { }
  updateUserPassword() {
    if (this.isValid()) {
      this.showLoadingSerive.display(true);
      console.log("data");
      this.profileupdateservice.updatePassword(this.profile)
        .subscribe(
          data => {
            console.log("AFTER data");
            this.showLoadingSerive.display(false);
            this._router.navigate(['/home']);
            this.messageService.add({ severity: 'success', detail: "Password changed successfully." });
            setTimeout(() => this.messageService.clear(), 3000);
          },
          error => {
            this.messageService.clear()
            console.log("AFTER data 2");
            this.hasPermission(error.code);
            this.showLoadingSerive.display(false);

            this.messageService.add({ severity: 'error', detail: error.message });
            setTimeout(() => this.messageService.clear(), 3000);
          }
        )
    }
  }

  isValid(): boolean {
    this.showLoadingSerive.display(true);
    if (this.profile.password !== this.profile.confirmPassword) {
      console.log("In the Error");

      this.showLoadingSerive.display(false);
      this.messageService.add({ severity: 'error', detail: "New password and confirm password must be same." });
      setTimeout(() => this.messageService.clear(), 3000);
      //this.displayErrorMsg("New password and conform password must be same.");
      return false;
    }
    if (this.profile.oldPassword === this.profile.password) {
      console.log("In the Error2");
      this.showLoadingSerive.display(false);
      this.messageService.add({ severity: 'error', detail: "New password must be different." });
      setTimeout(() => this.messageService.clear(), 3000);
      // this.displayErrorMsg('New password must be different.');
      return false;
    }
    return true;
  }
}
