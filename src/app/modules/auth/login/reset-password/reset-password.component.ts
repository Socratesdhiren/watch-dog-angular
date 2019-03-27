import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../../../models/login';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
 showLoading ;
 message;
 loginModel :LoginModel = new LoginModel();



  constructor() { }

  ngOnInit() {
  }
  onSubmit()
  {}

}
