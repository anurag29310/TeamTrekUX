import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SalaryDetailComponent } from './salary-detail/salary-detail.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

const routes: Routes = [
  {path:'salary',  component:SalaryDetailComponent},
  {path:'employee',  component:EmployeeDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
