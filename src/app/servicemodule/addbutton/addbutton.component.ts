import { Component, OnInit } from '@angular/core';
import { BridgeService } from '../bridge.service';


@Component({
  selector: 'app-addbutton',
  templateUrl: './addbutton.component.html',
  styleUrls: ['./addbutton.component.css']
})
export class AddbuttonComponent implements OnInit {

  inputDat:number=1;
  constructor( private _bridge :BridgeService) { }
  onclick(){
   this._bridge.sendData(this.inputDat);
   this.inputDat+=1;  
  }

  ngOnInit() {
  }

}
