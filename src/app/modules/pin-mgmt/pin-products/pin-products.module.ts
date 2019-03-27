import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PinProductsRoutingModule } from './pin-products-routing.module';
import { PinAddComponent } from './pin-add/pin-add.component';
import { PinListComponent } from './pin-list/pin-list.component';

@NgModule({
  imports: [
    CommonModule,
    PinProductsRoutingModule
  ],
  declarations: [PinAddComponent, PinListComponent]
})
export class PinProductsModule { }
