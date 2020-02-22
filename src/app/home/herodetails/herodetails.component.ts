import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';
import {FormControl,FormBuilder,FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router'



@Component({
  selector: 'app-herodetails',
  templateUrl: './herodetails.component.html',
  styleUrls: ['./herodetails.component.css']
})
export class HerodetailsComponent implements OnInit {
@Input() hero:Hero;

  constructor(private _fb:FormBuilder,private route:ActivatedRoute) { }
  id:string;
  name:string;
  dataForm=this._fb.group({
    id:[''],
    name:['']
  });

  onsubmit(){
    alert(this.dataForm);
    console.log(this.dataForm);
  }
  ngOnInit() {
    this.id=this.route.snapshot.paramMap.get('id');
    this.name=this.route.snapshot.paramMap.get('name')
    this.dataForm.controls.id.setValue(this.id) ;
    this.dataForm.controls.name.setValue(this.name) ;
  }

}
