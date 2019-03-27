import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdTypesRoutingModule } from './id-types-routing.module';
import { IdAddComponent } from './id-add/id-add.component';
import { IdListComponent } from './id-list/id-list.component';

@NgModule({
  imports: [
    CommonModule,
    IdTypesRoutingModule
  ],
  declarations: [IdAddComponent, IdListComponent]
})
export class IdTypesModule { }
