import { RouterModule } from '@angular/router';
import {
  DropdownModule,
  ToolbarModule,
  CheckboxModule,
  ButtonModule,
  DataTableModule,
  DialogModule,
  InputTextareaModule,
  MessagesModule,
  GrowlModule,
  LightboxModule,
  OverlayPanelModule,
  StepsModule,
  RadioButtonModule,
  CalendarModule,
  InputMaskModule,
  ConfirmDialogModule,
  SpinnerModule,
  TabViewModule,
  ProgressSpinnerModule,
  MenuModule,
  KeyFilterModule,
  MessageModule,
  CardModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToolbarModule,
    DropdownModule,
    CheckboxModule,
    ButtonModule,
    DataTableModule,
    DialogModule,
    InputTextareaModule,
    MessagesModule,
    GrowlModule,
    LightboxModule,
    OverlayPanelModule,
    StepsModule,
    RadioButtonModule,
    CalendarModule,
    InputMaskModule,
    ConfirmDialogModule,
    SpinnerModule,
    TabViewModule,
    ProgressSpinnerModule,
    MenuModule,
    KeyFilterModule,
    CardModule,
    MessageModule,
    TableModule
  ],
  exports: [CommonModule,
    FormsModule,
    RouterModule,
    ToolbarModule,
    DropdownModule,
    CheckboxModule,
    ButtonModule,
    DataTableModule,
    TableModule,
    DialogModule,
    InputTextareaModule,
    MessagesModule,
    GrowlModule,
    LightboxModule,
    OverlayPanelModule,
    StepsModule,
    RadioButtonModule,
    CalendarModule,
    InputMaskModule,
    ConfirmDialogModule,
    SpinnerModule,
    TabViewModule,
    ProgressSpinnerModule,
    MenuModule,
    KeyFilterModule,
    CardModule],
  declarations: []
})
export class SharedModule {}
