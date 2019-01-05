import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {AuthModule} from './auth/auth.module';
import {NeedAuthGuard} from './auth/auth.guard';
import { AdminModule } from './admin/admin.module';
import {GridModule} from '@progress/kendo-angular-grid';
import {NgbActiveModal, NgbModal, NgbTooltipConfig} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientModule } from './patient/patient.module';
import { ProviderModule } from './provider/provider.module';
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AdminModule,
    GridModule,
    PatientModule,
    ProviderModule
  ],
  providers: [NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
