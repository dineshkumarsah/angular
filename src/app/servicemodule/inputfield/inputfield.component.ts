import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms'
import { BridgeService } from '../bridge.service';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.css']
})
export class InputfieldComponent implements OnInit {

  constructor(private _bridge:BridgeService) { }
  name=new FormControl('');
  ngOnInit() {
    this._bridge.getData$.subscribe(
     num=>{
       if(!!num){
         this.name.setValue(num) 
       }
     } 
    );
  }

}
