import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinCategoriesRoutingModule } from './pin-categories-routing.module';
import { PinAddComponent } from './pin-add/pin-add.component';
import { PinListComponent } from './pin-list/pin-list.component';

@NgModule({
  imports: [
    CommonModule,
    PinCategoriesRoutingModule
  ],
  declarations: [PinAddComponent, PinListComponent]
})
export class PinCategoriesModule { }
