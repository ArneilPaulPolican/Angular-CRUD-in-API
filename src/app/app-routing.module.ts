import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampledataComponent } from './sampledata/sampledata.component';
import { SampleData } from './sampledata/samplemodel';
import { SampleService } from './sample.service';

const routes: Routes = [
  { path: 'dashboard', component:  DashboardComponent},
  { path: 'employee', component: EmployeeComponent },
  { path: 'employee/detail/:id', component: EmployeeDetailComponent }, 
  { path: 'sampledata', component : SampledataComponent }
];

@NgModule({
  imports: [
    //CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    // SampledataComponent
  ]
})
export class AppRoutingModule { }
