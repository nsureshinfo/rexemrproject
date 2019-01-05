import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { SigninComponent } from './signin.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginOtpComponent } from '../login-otp/login-otp.component';
import { ForgotComponent } from '../forgot/forgot.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [SigninComponent, LoginOtpComponent, ForgotComponent],
  entryComponents: [ LoginOtpComponent,ForgotComponent ]
  
})
export class SigninModule { }

