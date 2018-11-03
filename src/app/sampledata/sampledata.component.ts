import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { SampleService } from '../sample.service';

import { ObservableArray, CollectionView } from 'wijmo/wijmo';

import { SampleData } from '../sampledata/samplemodel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sampledata',
  templateUrl: './sampledata.component.html',
  styleUrls: ['./sampledata.component.css']
})
export class SampledataComponent implements OnInit {

  private sampleSub : any;
  public SampleList: SampleData = 
  { 
    id: 0, 
    description: "", 
    remarks:""
  };  
  public samples: SampleData[];

  public fgdSampleData : ObservableArray;
  public fgdSampleCollection : CollectionView;

  constructor(
    private sampleService: SampleService,
    private viewContainer: ViewContainerRef,
    private router: Router
    // private 
  ) { }

  public getSampleData(): void{
    let samples=new ObservableArray();
    this.sampleService.getSampleData();
    this.sampleSub=this.sampleService.sampledataObservable.subscribe(
      data => {
        if (data.length >0 ){
          this.fgdSampleData=data;
          this.fgdSampleCollection=new CollectionView(this.fgdSampleData);
          this.fgdSampleCollection.pageSize=15;
          this.fgdSampleCollection.trackChanges=true;
        }
      } 
    );
  }

  ngOnInit() {
    this.fgdSampleData=new ObservableArray();
    this.fgdSampleCollection=new CollectionView(this.fgdSampleData);

    this.getSampleData();
  }
  ngOnDestroy(){
    if(this.sampleSub !=null ) this.sampleSub.unsubscribe();
  }

}
