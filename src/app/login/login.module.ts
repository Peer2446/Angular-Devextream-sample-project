// src/app/login/login.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxButtonModule } from 'devextreme-angular';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, DxButtonModule],
  exports: [LoginComponent],
})
export class LoginModule {}
