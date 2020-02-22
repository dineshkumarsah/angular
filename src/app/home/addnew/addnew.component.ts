import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms'
import { Hero } from '../hero';
import { HEROS } from '../herolist'
import { from } from 'rxjs';
import { Router } from '@angular/router';
import {nameValid} from '../validation/name.validator'
import {shouldBeNum} from '../validation/name.validator'

@Component({
  selector: 'app-addnew',
  templateUrl: './addnew.component.html',
  styleUrls: ['./addnew.component.css']
})
export class AddnewComponent implements OnInit {
  data11 = HEROS;
  data: Hero;
  data1: [];
  constructor(private _fb: FormBuilder, public _router: Router) { }

  formData = this._fb.group({
    id: ['',[Validators.required,shouldBeNum]],
    name: ['',[Validators.required,nameValid]]
  });
  submitData() {
    if (this.formData.value.id!="" && this.formData.value.name!="") {
      this.data11.push(this.formData.value);
    }
    this._router.navigate(['/home']);
  }
  close() {
    this._router.navigate(['/home']);
    console.log(this._router.navigate(['/home']));
    
  }

  ngOnInit() {

   console.log(this.formData);
   
  }

}
