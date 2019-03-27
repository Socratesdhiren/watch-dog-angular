import { SharedModule } from './../shared/shared.module';
import { TemplateComponent } from './template.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    TemplateRoutingModule
  ],
  declarations: [TemplateComponent]
})
export class TemplateModule { }
