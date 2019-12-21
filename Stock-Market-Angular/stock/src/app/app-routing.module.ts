import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin/admin.component';

import { ImportdataComponent } from './admin/importdata/importdata.component';
import { ChangePasswordComponent } from './user/change-password/change-password.component';


import { UserComponent } from './user/user/user.component';
import { IpoDisplayComponent } from './common/ipo-display/ipo-display.component';
import { EditIpoComponent } from './admin/edit-ipo/edit-ipo.component';
import { ManageCompanyComponent } from './admin/manage-company/manage-company.component';
import { ListCompanyComponent } from './admin/list-company/list-company.component';
import { SignupComponent } from './common/signup/signup.component';
import { LoginComponent } from './common/login/login.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';
import { ManageExchangeComponent } from './admin/manage-exchange/manage-exchange.component';
import { AddExchangeComponent } from './admin/add-exchange/add-exchange.component';
import { ViewCompaniesComponent } from './user/view-companies/view-companies.component';
import { ComparisonChartComponent } from './user/comparison-chart/comparison-chart.component';
import { AuthGuardService } from './service/auth-guard.service';
import { UserAuthGuardService } from './service/user-auth-guard.service';


const routes: Routes = [
  { path: '', component:IpoDisplayComponent, pathMatch: 'full',canActivate:[UserAuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'admin', component: AdminComponent, canActivateChild:[AuthGuardService],
    children: [
      { path: 'importdata', component: ImportdataComponent },
      { path: 'ipo-display', component: IpoDisplayComponent },
      { path: 'edit-ipo', component: EditIpoComponent },
      { path: 'manage-company/:companyID', component: ManageCompanyComponent},
      { path: 'list-company', component: ListCompanyComponent},
      { path: 'manage-exchange', component: ManageExchangeComponent},
      { path: 'add-exchange', component: AddExchangeComponent},
      { path: 'add-ipo', component: EditIpoComponent},
    ]
  },
  {
    path: 'user', component: UserComponent,canActivateChild:[UserAuthGuardService],
         children: [
      { path: 'change-password', component: ChangePasswordComponent},
      { path: 'ipo-display', component: IpoDisplayComponent },
      { path: 'change-password', component: ChangePasswordComponent },
      { path: 'update-user', component: UserUpdateComponent},
      { path: 'view-companies', component: ViewCompaniesComponent},
      { path: 'compare-companies', component: ComparisonChartComponent},
      { path: 'user-update', component: UserUpdateComponent},
      { path: 'change-password', component: ChangePasswordComponent},

    ]
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
