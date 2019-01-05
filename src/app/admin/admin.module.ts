import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { PatientDetailsModule } from './patient-details/patient-details.module';
import { AdminDashboardComponent } from './dashboard/admindashboard.component';
import {BreadcrumbsModule} from "ng6-breadcrumbs";
@NgModule({
  declarations: [AdminComponent,AdminDashboardComponent],
  imports: [
    CommonModule,
    RouterModule,
    PatientDetailsModule,
    BreadcrumbsModule
    
  ]
})
export class AdminModule { }
