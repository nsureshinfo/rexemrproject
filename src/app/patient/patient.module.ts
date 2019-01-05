import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PatientDashboardComponent } from './dashboard/dashboard.component';
import { PatientComponent } from './patient.component';
import { AddNewComponent } from './add-new/add-new.component';
import {BreadcrumbsModule} from "ng6-breadcrumbs";


@NgModule({
  declarations: [PatientDashboardComponent,PatientComponent,AddNewComponent],
  imports: [
    CommonModule,
    RouterModule,
    BreadcrumbsModule
  ]
})
export class PatientModule { }
