import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ObservableArray } from 'wijmo/wijmo'
import { Headers, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router'
import { SampleData } from './sampledata/samplemodel';

@Injectable()

export class SampleService {

  private headers = new Headers({
    // 'Content-Type':'application/json'
  });
  private options = new RequestOptions({ headers: this.headers });

  // public SampleDetail: SampleData; 

  public sampledataSource = new Subject<ObservableArray>();
  public sampledataObservable = this.sampledataSource.asObservable();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: Http,
  ) { }
  public getSamples: SampleData;

  public getSampleData(): void {
    let url = "http://localhost:58147/api/Sample/List";
    let sampledatas = new ObservableArray();
    this.http.get(url, this.options).subscribe(
      response => {
        var results = new ObservableArray(response.json());
        if (results.length > 0) {
          for (var i = 0; i <= results.length - 1; i++) {
            sampledatas.push({
              id: results[i].Id,
              description: results[i].Description,
              remarks: results[i].Remarks
            });
          }
          this.sampledataSource.next(sampledatas);
        }
      }
    );
  }
}