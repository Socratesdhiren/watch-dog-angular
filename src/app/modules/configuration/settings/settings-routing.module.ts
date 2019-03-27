import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsAddComponent } from './settings-add/settings-add.component';

const routes: Routes = [
  {path:"add", component:SettingsAddComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
 
exports: [RouterModule]
})
export class SettingsRoutingModule { }
