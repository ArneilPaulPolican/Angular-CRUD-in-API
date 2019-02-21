import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Page2Service } from '../page2.service';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private employeeService: Page2Service
  ) { }
  public cmdBack():void{
    this.router.navigate(['/employee']);
  }
  ngOnInit() {
  }

}
