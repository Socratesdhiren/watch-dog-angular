import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlankPageComponent} from '../blank-page/blank-page.component';
import {SampleAddComponent} from '../sample-add/sample-add.component';
import {SampleListComponent} from '../sample-list/sample-list.component';

const routes: Routes = [
  {path: 'blank', component: BlankPageComponent},
  {path: 'add' , component: SampleAddComponent},
  {path: 'list' , component : SampleListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SamplemoduleRoutingModule { }
