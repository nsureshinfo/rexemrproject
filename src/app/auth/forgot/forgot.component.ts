import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reset',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  forgotPwd: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    public activeDialog: NgbActiveModal,) { }

  ngOnInit() {
    this.forgotPwd = this.formBuilder.group({
      forgot: ['', [Validators.required , Validators.email]],
    });
  }
  get f() { return this.forgotPwd.controls; }

  close(){
    this.activeDialog.close(true);
  }

  submitOtp() {
    this.submitted = true;
    if (this.forgotPwd.invalid) {
      return;
    }
    this.activeDialog.close(true);
    this.router.navigateByUrl('patient/dashboard');
    //this.router.navigateByUrl('patient/dashboard');
  //  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
  }
}
