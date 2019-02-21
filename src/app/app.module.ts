import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// component
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { AppRoutingModule } from './/app-routing.module';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

// services
import { EmployeeService } from './employee.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampledataComponent } from './sampledata/sampledata.component'
import { SampleService } from './sample.service';
 
import { HttpModule } from '@angular/http';
import { Page2Component } from './page2/page2.component';
import { UiModule } from './ui/ui.module';
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    DashboardComponent,
    SampledataComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    UiModule
  ],
  providers: [
    EmployeeService,
    SampleService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
