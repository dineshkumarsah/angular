import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BridgeService {
  
  constructor() { }

  private _getData = new Subject<number>();
  getData$=this._getData.asObservable();

  sendData(data:number){
    this._getData.next(data)
  }
}
