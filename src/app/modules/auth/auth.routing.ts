
import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";


export const routes:Routes = [
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  // {
  //   path: 'register',
  //   loadChildren: './+register/register.module#RegisterModule'
  // },

];

export const routing = RouterModule.forChild(routes);
