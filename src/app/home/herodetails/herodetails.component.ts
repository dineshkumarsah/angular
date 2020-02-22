import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';
import {FormControl,FormBuilder,FormGroup} from '@angular/forms'



@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})
export class HerodetailsComponent implements OnInit {
@Input() hero:Hero;

  constructor(private _fb:FormBuilder) { }
  
  dataForm=this._fb.group({
    id:[''],
    name:['']
  });

  onsubmit(){
    alert(this.dataForm);
    console.log(this.dataForm);
  }
  ngOnInit() {
    console.log(this.dataForm.value.id);
    
  }

}
