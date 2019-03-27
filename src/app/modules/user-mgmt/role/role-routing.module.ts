import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { RoleListComponent } from './role-list/role-list.component';
import { RoleAddComponent } from './role-add/role-add.component';
const routes: Routes = [
  //{path:'list' , component:RoleListComponent },
  {path:'add',  component:RoleAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
