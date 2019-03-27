import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {LoginResponseModel} from "../../models/login-response-model";
import {AuthenticationService} from "../../services/authentication.service";
import {Router, Routes} from "@angular/router";
import {Configuration} from "../../app.config";
import {MenuItem} from "primeng/primeng";
import {BaseForm} from "../../helpers/component-helper";
import {ChangePasswordModel} from '../../models/profile';
import {RegistrationsService} from '../../services/registrations.service';



@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent  implements OnInit {
  public currentUser: LoginResponseModel = new LoginResponseModel();
  @ViewChild('abc') abc;
  @ViewChild('footer_id') footer_id;
  public footer1:any;
  xyz:any;
  display = false;
  logoutdisplay=false;
  lastVisitedMenuIndex: number;
  activeMenuId:number;
  activeMenuId1:boolean = true;
  hideMenu:boolean=false;
  activeSubMenuId:number;
  menuActive:boolean=true;
  subMenuActive:boolean=true;
  subMenuActive1:boolean=true;
  clickUser:boolean=false;
  status: boolean = true;
  innerWidth;
  regCount: number;
  passwordModel: ChangePasswordModel = new ChangePasswordModel();
  parent: LoginResponseModel = new LoginResponseModel();

  private items: MenuItem[];
  constructor (private auth: AuthenticationService,
              private router: Router,
              private config: Configuration,
              private registrationService : RegistrationsService
              ) {

    this.lastVisitedMenuIndex = 0;
    this.parent = JSON.parse(sessionStorage.getItem(this.config.CURRENT_USER));
   // this.parent.fullName = this.parent.firstName+" " +this.parent.middleName+" "+this.parent.lastName;
    this.innerWidth = window.innerWidth;
    console.log("Inner Width Size ::::: " +this.innerWidth);
    this.registrationService.getPendingCount()
      .subscribe(
        data => {
          if(data.count > 0){

            this.regCount = data.count;
          }
        },error => {

        }
      )


  }
  showDialog(){
    this.display = true;
  }
  logoutDialog(){
    this.logoutdisplay=true;
  }


  onBodyClick(event:Event){
    if(this.innerWidth < 480) {
      this.status = false;
      document.getElementById("layout-sidebar").style.width = "0";
      document.getElementById("layout-content").style.marginLeft = "0";
    }
  }

  onSubMenuClick(){
    if(this.innerWidth < 480) {
      this.status = false;
      document.getElementById("layout-sidebar").style.width = "0";
      document.getElementById("layout-content").style.marginLeft = "0";
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = event.target.innerWidth;
    console.log(this.innerWidth,'inner height',window.innerHeight);
    if(this.innerWidth < 480){
      this.status = true;
      document.getElementById("layout-sidebar").style.width = "0";
      document.getElementById("layout-content").style.marginLeft = "0";
    } else{
      this.status = true;
      document.getElementById("layout-sidebar").style.width = "240px";
      document.getElementById("layout-content").style.marginLeft = "240px";
    }
  }





  public ngOnInit() {
    console.log("inner height", window.innerHeight);
    if(this.innerWidth < 480){
      console.log("small");
      this.status = false;
      document.getElementById("layout-sidebar").style.width = "0";
      document.getElementById("layout-content").style.marginLeft = "0";
    }

  }


  onMenuButtonClick(event: Event) {
    this.status = !this.status;
    if(this.status){
      console.log("this is it",this.status)
      document.getElementById("layout-sidebar").style.width = "240px";
      document.getElementById("layout-content").style.marginLeft = "240px";
      document.getElementById("toolbarid").style.marginLeft = "251px";
      document.getElementById("toolbarid").style.width = "80.6%";
      document.getElementById("footerid").style.marginLeft = "240px";
    }
    else
      {
      console.log(this.status)
      document.getElementById("layout-sidebar").style.width = "0";
      document.getElementById("layout-content").style.marginLeft = "0";
      document.getElementById("toolbarid").style.marginLeft = "13px";
      document.getElementById("toolbarid").style.width = "98.1%";
      document.getElementById("footerid").style.marginLeft = "0";
    }
  }


  // onMenuClick(event: Event) {
  //   this.clickUser = !this.clickUser;
  //   event.preventDefault();
  // }

  logout() {
  this.auth.logout();
       this.router.navigate(['/auth/login']);
     }
    
     changeRoute(){
    console.log('helloooo')

     }

}
