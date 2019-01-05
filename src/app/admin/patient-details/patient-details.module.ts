import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {GridModule} from '@progress/kendo-angular-grid';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AlertComponent, AlertContent, DialogContent} from '../alert.component';
import { CreateNewPatientComponent } from './create-new-patient/create-new-patient.component';
import { EditPatientComponent} from './edit-patient/edit-patient.component';
import { PatientDetailsComponent} from './patient-details.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';


@NgModule({
  declarations: [PatientDetailsComponent, CreateNewPatientComponent, EditPatientComponent, AlertComponent, AlertContent, DialogContent, ViewPatientComponent],
  imports: [
    CommonModule, GridModule, NgbModule.forRoot(), FormsModule
  ],
  entryComponents: [ViewPatientComponent, EditPatientComponent, AlertContent, DialogContent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class PatientDetailsModule { }
