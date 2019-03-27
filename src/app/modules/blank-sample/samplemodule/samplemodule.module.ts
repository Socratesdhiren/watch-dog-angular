import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SamplemoduleRoutingModule } from './samplemodule-routing.module';
import {SampleAddComponent} from '../sample-add/sample-add.component';
import {SampleListComponent} from '../sample-list/sample-list.component';
import {BlankPageComponent} from '../blank-page/blank-page.component';
import {CardModule} from "primeng/card";
import {
  CalendarModule, CheckboxModule,
  ConfirmDialogModule, DataTableModule, DropdownModule, InputMaskModule, InputTextareaModule, KeyFilterModule,
  LightboxModule,
  MessagesModule,
  OverlayPanelModule,
  ProgressSpinnerModule,
  RadioButtonModule,
  SpinnerModule,
  TabViewModule
} from "primeng/primeng";
import {MenuModule} from "primeng/menu";
import {QRCodeModule} from "angular2-qrcode";
import {StepsModule} from "primeng/steps";
import {GrowlModule} from "primeng/growl";
import {DialogModule} from "primeng/dialog";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    SharedModule,
    SamplemoduleRoutingModule,
  ],
  declarations: [
    SampleAddComponent,
    SampleListComponent,
    BlankPageComponent
  ]
})
export class SamplemoduleModule { }
