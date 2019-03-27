import { AuthComponent } from './modules/auth/auth.component';
import { TemplateModule } from './modules/template/template.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {
 ConfirmDialog, MenuModule, ProgressSpinnerModule, SelectItem,
  TabViewModule,
  
} from 'primeng/primeng';
import {ChartModule} from 'primeng/chart';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';


import {
  ConfirmationService
} from 'primeng/primeng';     //accordion and accordion tab



import { TemplateComponent } from './modules/template/template.component';
import {UserService} from './services/user.service';
import {CanActivateGuard} from './services/guard.service';
import {Configuration} from './app.config';
import {AuthenticationService} from './services/authentication.service';
import {IpAddService} from './services/ipadd.service';
import {CookieService} from './services/cookie.service';
import {BranchService} from './services/branch.service';
import {TransactionsService} from './services/transactions.service';
import {RegistrationsService } from './services/registrations.service';
import { routing} from './app.routes';
import {ProfileService} from './services/profile.service';

import { ChangeToUpperCaseDirective } from './directives/change-to-upper-case.directive';
import {MessageService} from "primeng/components/common/messageservice";
import {SwapdetailService} from "./services/swapdetail.service";
import {  CpuActiveService }from "./services/cpuactive.service";

import {OsinfosService} from "./services/osinfo.service";
import{LoadAvgService} from "./services/loadavg.service";
import {ProductService} from "./services/product.service";
import {HttpClientModule} from "@angular/common/http";
import { CarService } from './services/car.service';
import {CpuinfosService} from './services/cpuinfos.service';
import {NetworkService} from './services/network.service';
import { DhirenService } from './services/dhiren.service';
import { ProfileUpdateService } from './services/profile.update.service';
import { ShowLoadingService }  from './services/showLoading.service';
import { Table } from 'primeng/table';
import {TableModule} from 'primeng/table';
import {ProfileModule } from './modules/profile/profile.module';






let services = [
  UserService,
  CanActivateGuard,
  Configuration,
  AuthenticationService,
  CookieService,
  BranchService,
  TransactionsService,
  ProfileService,
  ConfirmationService,
  MessageService,
  ProductService,
  CpuinfosService,
  DhirenService,
  SwapdetailService,
  NetworkService,
  LoadAvgService,
  OsinfosService,
  CpuActiveService,
  ProfileUpdateService,
  ShowLoadingService,
  RegistrationsService,
  IpAddService

  
  



];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    ChangeToUpperCaseDirective
  
  ],


  imports: [

  BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TemplateModule,
    routing,
    ChartModule,
    TableModule,
    ProfileModule
  ],
  providers: [
  ...services,
  { provide: LocationStrategy,
    useClass: HashLocationStrategy,
    },
  
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}
