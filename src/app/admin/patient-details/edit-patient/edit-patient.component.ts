import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import {NgbActiveModal, NgbModal, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import { PatientDetailsService} from '../patient-details.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.scss']
})
export class EditPatientComponent implements OnInit {

  getEditPatientData: any = {};

  constructor(
    private patientService: PatientDetailsService,
    public activeDialog: NgbActiveModal,
    private alert: NgbModal
  ) { }

  closePopup() {
    this.activeDialog.close(false);
  }

  ngOnInit() {
    this.getEditPatientData = this.patientService.getEditPatientData;
  }
}
