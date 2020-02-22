import { Component, OnInit } from '@angular/core';
import {ApiService} from './api.service';
import {Smartphone} from '../smartphone';

@Component({
  selector: 'app-company-record',
  templateUrl: './company-record.component.html',
  styleUrls: ['./company-record.component.css']
})
export class CompanyRecordComponent implements OnInit {
  
  headers:any;
  // smartphone : any = [] ;
  smartphone : Smartphone[]=[];
  constructor( private api : ApiService) { }

  // getSmartphone(){
  //   this.api.getSmartphone().subscribe(
  //     data => {
  //       for(const d of (data as any)){
  //         this.smartphone.push({
  //           name:d.name,
  //           price:d.price
  //         });
  //       }
  //       console.log("scheck",this.smartphone);
  //     }
      
  //   );
  // }
  getSmartphones() {
    this.api.getSmartphone()
    .subscribe(resp => {
      console.log(resp);
      const keys = resp.headers.keys();
      this.headers = keys.map(key =>
        `${key}: ${resp.headers.get(key)}`);
  
      for (const data of resp.body) {
        this.smartphone.push(data);
      }
      console.log(this.smartphone);
    });
  }

  ngOnInit() {
  }

}
