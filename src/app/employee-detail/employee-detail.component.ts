import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee.model';
// import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeServie: EmployeeService
  ) { }

  public getEmployeeDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.employeeServie.detailEmployee(id).subscribe(employee => this.employee = employee);
  }

  public btnUpdateEmployee(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (this.employeeServie.updateEmployee(id, this.employee) == 1) {
      this.router.navigate(['/employee']);
    };
  }

  ngOnInit() {
    this.getEmployeeDetail();
  }

}
