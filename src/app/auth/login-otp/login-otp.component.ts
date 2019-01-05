import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.component.html',
  styleUrls: ['./login-otp.component.scss']
})
export class LoginOtpComponent implements OnInit {
  loginOtps: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    public activeDialog: NgbActiveModal,) { }

  ngOnInit() {
    this.loginOtps = this.formBuilder.group({
      loginOtp: ['', [Validators.required]],
    });
  }
  get f() { return this.loginOtps.controls; }

  close(){
    this.activeDialog.close(true);
  }

  submitOtp() {
    this.submitted = true;
    if (this.loginOtps.invalid) {
      return;
    }
    this.activeDialog.close(true);
    this.router.navigateByUrl('admin/patientDetails');
    //this.router.navigateByUrl('patient/dashboard');
  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }

}
