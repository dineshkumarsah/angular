import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginviewComponent} from './loginview/loginview.component';
import { Routes ,RouterModule} from '@angular/router';


export const routes:Routes=[
  {path :'', component:LoginviewComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule
  ]
})
export class LoginRoutingModule { }
