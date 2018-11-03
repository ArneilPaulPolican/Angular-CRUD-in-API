import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Dashboard } from './dashboard/menu';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public employee: Employee;
  public employees: Employee[] = [
    { id: 11, employee: 'Mr. Nice' },
    { id: 12, employee: 'Narco' },
    { id: 13, employee: 'Bombasto' },
    { id: 14, employee: 'Celeritas' },
    { id: 15, employee: 'Magneta' },
    { id: 16, employee: 'RubberMan' },
    { id: 17, employee: 'Dynama' },
    { id: 18, employee: 'Dr IQ' },
    { id: 19, employee: 'Magma' },
    { id: 20, employee: 'Tornado' }
  ];

  public menu: Dashboard;
  public menus: Dashboard[]=[
    { id:1, menu: 'Employee' },
    { id:2, menu: 'Loans'},
    { id:3, menu: 'Deductions '}
  ];

  constructor(
    private route: ActivatedRoute 
  ) { }

  public listMenu(): Dashboard[]{
    return this.menus;
  }
  public detailMenu(id: number):Observable<Dashboard>{
    return of(this.menus.find(menu => menu.id === id ))
  }

  public listEmployee(): Employee[] {
    return this.employees;
  }

  public detailEmployee(id: number): Observable<Employee> {
    return of(this.employees.find(employee => employee.id === id));
  }

  public addEmployee(objEmployee: Employee): void {
    this.employees.push({
      id: objEmployee.id,
      employee: objEmployee.employee
    });
  }

  public updateEmployee(id: number, objEmployee: Employee): number {
    let updateItem = this.employees.find(employee => employee.id === id);
    let index = this.employees.indexOf(updateItem);
    this.employees[index] = objEmployee;

    return 1;
  }

  public deleteEmployee(id: number): void {
    let updateItem = this.employees.find(employee => employee.id === id);
    let index = this.employees.indexOf(updateItem);

    this.employees.splice(index, 1);
  }
}
 