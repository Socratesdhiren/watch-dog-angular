import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestTypeRoutingModule } from './request-type-routing.module';
import { RequestAddComponent } from './request-add/request-add.component';
import { RequestListComponent } from './request-list/request-list.component';

@NgModule({
  imports: [
    CommonModule,
    RequestTypeRoutingModule
  ],
  declarations: [RequestAddComponent, RequestListComponent]
})
export class RequestTypeModule { }
