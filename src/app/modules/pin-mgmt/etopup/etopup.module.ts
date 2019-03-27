import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtopupRoutingModule } from './etopup-routing.module';
import { EtopupAddComponent } from './etopup-add/etopup-add.component';
import { EtopupListComponent } from './etopup-list/etopup-list.component';

@NgModule({
  imports: [
    CommonModule,
    EtopupRoutingModule
  ],
  declarations: [EtopupAddComponent, EtopupListComponent]
})
export class EtopupModule { }
