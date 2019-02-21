import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class Page2Service {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: Http
  ) { }
}
