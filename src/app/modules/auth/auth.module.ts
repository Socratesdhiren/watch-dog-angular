import { SharedModule } from './../shared/shared.module';

import { RouterModule } from '@angular/router';
import { routing } from './auth.routing';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing

  ],
  declarations: [],
  exports: []
})
export class AuthModule { }
