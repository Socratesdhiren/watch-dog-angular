import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BanksAddComponent } from './banks-add/banks-add.component';
import { BanksListComponent } from './banks-list/banks-list.component';

const routes: Routes = [
  {path:'list', component:BanksListComponent},
  {path:'add', component:BanksAddComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class BanksRoutingModule { }
