import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css']
})
export class TechnologyComponent implements OnInit {

  @Input() tech : string;
  @Input() technology : [];
  @Output() chieldEvent =new EventEmitter();


  constructor() { }
  onchange(value){
    this.chieldEvent.emit(value);
  }

  ngOnInit() {
  }

}
