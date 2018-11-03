import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Dashboard } from '../dashboard/menu';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public menus: Dashboard[]=[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.listMenu();
  }
  public listMenu(): void{
    this.menus = this.employeeService.listMenu()
  //.subscribe(menus => this.menus = menus.slice(1,3));
  }

}
