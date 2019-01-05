import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProviderComponent } from './provider.component';
import { ProviderdashboardComponent } from './providerdashboard/providerdashboard.component';
import {BreadcrumbsModule} from "ng6-breadcrumbs";

@NgModule({
  declarations: [
    ProviderComponent,
    ProviderdashboardComponent,],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    RouterModule
  ]
})
export class ProviderModule { }
