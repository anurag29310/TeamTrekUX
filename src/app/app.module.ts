import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';
import { CommonGridComponent } from './core/common-grid/common-grid.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { SalaryDetailComponent } from './salary-detail/salary-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthModalComponent,
    HeaderComponent,
    CommonGridComponent,
    EmployeeDetailComponent,
    SalaryDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
