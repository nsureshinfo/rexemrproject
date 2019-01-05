import { Component, OnInit } from '@angular/core';
import {PatientDetailsService} from '../patient-details.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.scss']
})
export class ViewPatientComponent implements OnInit {

  getViewPatientData: any = {};

  constructor(
    private patientService: PatientDetailsService,
    public activeDialog: NgbActiveModal,
    private alert: NgbModal
  ) { }

  closePopup() {
    this.activeDialog.close(false);
  }

  ngOnInit() {
    this.getViewPatientData = this.patientService.getViewPatientData;
  }

}
