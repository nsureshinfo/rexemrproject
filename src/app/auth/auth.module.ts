import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninModule } from './signin/signin.module';
import {NeedAuthGuard} from './auth.guard';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    SigninModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    NeedAuthGuard
  ],
})
export class AuthModule { }
