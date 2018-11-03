import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //Routes
import { EmployeeService } from '../employee.service'; //Services
import { Employee } from '../employee.model';   // Model
 
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  public employee: Employee = {
    id: 0,
    employee: ""
  };
  public employees: Employee[];   // List from services

  constructor(
    private router: Router,
    private employeeService: EmployeeService
  ) { }

  public listEmployee(): void { 
    this.employees = this.employeeService.listEmployee();
  }

  // Add button
  public btnAddEmployee(): void {
    this.employeeService.addEmployee(this.employee);
  }

  public btnEditEmployee(id: number): void {
    this.router.navigate(['/employee/detail', id]);
  }

  public btnDeleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id);
  }

  ngOnInit() {
    this.listEmployee();
  }
}
