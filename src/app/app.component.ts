import { Component, OnInit ,ViewChild, AfterViewInit, ElementRef} from '@angular/core';

import {FormControl , FormGroup} from '@angular/forms';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']

})
export class AppComponent  {
  // @ViewChild(ServiceComponent) view: ServiceComponent;
  
  constructor(){}
  // ngOnInit(){
  //   this._employeeService.getEmployees().subscribe(data=>this.employee=data)

  // }
  // ngAfterViewInit(){
  //   console.log(this.somename.nativeElement)
  // }
  // success(){
  //   var msg: Message = { message: 'success' , status: true}
  //    this.view.dispaly(msg);

  // }
  // faild(){
  //   var msg:Message={message: 'fail' , status: false}
  //   this.view.dispaly(msg);
  // }
  ngOnInit(){
   
  }
 
  // this.polecyservice.getHeroes().subscribe(books => this./this.data= books)
 
  
}