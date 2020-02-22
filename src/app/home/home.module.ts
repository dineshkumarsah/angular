import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
import {routes} from './home-routing.module'
import{FormsModule,ReactiveFormsModule } from '@angular/forms'
import { from } from 'rxjs';
import { HerosComponent } from './heros/heros.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';
import { AddnewComponent } from './addnew/addnew.component';
import {GridModule} from '@syncfusion/ej2-angular-grids';


@NgModule({
  declarations: [ HerosComponent, HerodetailsComponent, AddnewComponent],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,GridModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule {

 
  
 }
