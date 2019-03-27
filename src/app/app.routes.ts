import { AuthComponent } from './modules/auth/auth.component';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './modules/home/home.component';
import {TemplateComponent} from './modules/template/template.component';
import {CanActivateGuard} from './services/guard.service';


const routes: Routes = [
  {path: 'auth', component: AuthComponent, loadChildren: 'app/modules/auth/auth.module#AuthModule'},

  {path: '', redirectTo: "/auth/login", pathMatch: 'full'},
  {
    // Root
    component: TemplateComponent,
    path: '',
    canActivate: [CanActivateGuard],
    children: [
      {component: HomeComponent, path: 'home', canActivate: [CanActivateGuard] },
      {loadChildren: './modules/blank-sample/samplemodule/samplemodule.module#SamplemoduleModule', path: "sample", canActivate: [CanActivateGuard]},
      {loadChildren: './modules/bank-mgmt/banks/banks.module#BanksModule', path: "banks", canActivate: [CanActivateGuard]},
      {loadChildren: './modules/bank-mgmt/request-type/request-type.module#RequestTypeModule', path: "requestType", canActivate: [CanActivateGuard]},
      {loadChildren: './modules/user-mgmt/users/users.module#UsersModule', path: "users", canActivate: [CanActivateGuard]},
      {loadChildren: './modules/user-mgmt/role/role.module#RoleModule', path: "roles", canActivate: [CanActivateGuard]},
      {loadChildren: './modules/user-mgmt/users/users.module#UsersModule', path: "users", canActivate: [CanActivateGuard]},
     
      {loadChildren: './modules/configuration/settings/settings.module#SettingsModule', path: "settings", canActivate: [CanActivateGuard]},
     // {loadChildren: './modules/user-mgmt/request-type/request-type.module#UsersModule', path: "request", canActivate: [CanActivateGuard]}
     {loadChildren:'./modules/profile/profile.module#ProfileModule',path:"profile",canActivate:[CanActivateGuard]},
  



//{component: UserpreferenceComponent, path: "users/:id/reset_password", canActivate: [CanActivateGuard]},
    ],
  },
];
    export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
