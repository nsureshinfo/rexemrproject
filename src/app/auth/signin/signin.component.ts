import { Component, OnInit } from '@angular/core';
import { ApiService } from './signin.service';
import { CustomerService } from '../../customer.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbTabChangeEvent, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';
import { LoginOtpComponent } from '../login-otp/login-otp.component';
import { ForgotComponent } from '../forgot/forgot.component';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  username = 'peter@klaven';
  password = 'cityslicka';
  registerForm: FormGroup;
  submitted = false;
  AlertOptions: any = { keyboard: false, backdrop: 'static' };
  constructor(
    private formBuilder: FormBuilder,
    private ApiService: ApiService,
    private customer: CustomerService,
    private router: Router,
    private modalService: NgbModal, ) {
  }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.tryLogin()
  }

  forgotPassword() {
    const loginOtp = this.modalService.open(ForgotComponent, this.AlertOptions);
    loginOtp.result.then((res) => {
      if (res) {
        
      }
    });
  }

  loginOtp() {
    const loginOtp = this.modalService.open(LoginOtpComponent, this.AlertOptions);
    loginOtp.result.then((res) => {
      if (res) {
        
      }
    });
  }

  tryLogin() {
    this.ApiService.login(
      this.username,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.customer.setToken(r.token);
          //  this.router.navigateByUrl('admin/patientDetails');
            this.loginOtp()
          }
        },
        r => {
          //  alert(r.error.error);
        });
  }

}
