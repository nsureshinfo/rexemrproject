import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './auth/signin/signin.component';
import { PatientDashboardComponent } from './patient/dashboard/dashboard.component';
import { PatientComponent } from './patient/patient.component';
import { AddNewComponent } from './patient/add-new/add-new.component';
import { ProviderComponent } from './provider/provider.component';
import { ProviderdashboardComponent } from './provider/providerdashboard/providerdashboard.component';
import { NeedAuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminDashboardComponent } from './admin/dashboard/admindashboard.component';
import { PatientDetailsComponent } from './admin/patient-details/patient-details.component';

const authRoutes: Routes = [
  {
    path: 'auth', component: AuthComponent, children: [
      { path: '', component: SigninComponent },
    ]
  },
  {
    path: 'patient', component: PatientComponent, children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: PatientDashboardComponent,
        canActivate: [NeedAuthGuard],
        data: {
          breadcrumb: 'Dashboard'
        },
      },
      {
        path: 'addNew',
        component: AddNewComponent,
        canActivate: [NeedAuthGuard]
      }
    ]
  },

  {
    path: 'admin',
    component: AdminComponent,
    data: {
      breadcrumb: 'Admin'
    },
    children: [
      {
        path: '',
        redirectTo: 'adminDashboard',
        pathMatch: 'full',
      },
      {
        path: 'adminDashboard',
        component: AdminDashboardComponent,
        canActivate: [NeedAuthGuard],
        data: {
          breadcrumb: 'Dashboard'
        },
      },
      {
        path: 'patientDetails',
        component: PatientDetailsComponent,
        canActivate: [NeedAuthGuard],
        data: {
          breadcrumb: 'Patient Details'
        }
      }
    ]
  },

  {
    path: 'provider',
    component: ProviderComponent,
    data: {
      breadcrumb: 'Provider'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: ProviderdashboardComponent,
        canActivate: [NeedAuthGuard],
        data: {
          breadcrumb: 'Dashboard'
        }
      },
      {
        path: 'addNew',
        component: AddNewComponent,
        canActivate: [NeedAuthGuard]
      }
    ]
  },
  {
    path: '404',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(authRoutes)],
  exports: [RouterModule],
  providers: [
    NeedAuthGuard
  ],
})
export class AppRoutingModule { }
