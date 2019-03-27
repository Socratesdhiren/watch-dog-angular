import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BanksRoutingModule } from './banks-routing.module';
import { BanksAddComponent } from './banks-add/banks-add.component';
import { BanksListComponent } from './banks-list/banks-list.component';

@NgModule({
  imports: [
    CommonModule,
    BanksRoutingModule
  ],
  declarations: [BanksAddComponent, BanksListComponent]
})
export class BanksModule { }
