import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import {HerosComponent} from './heros/heros.component'
import { AddnewComponent } from './addnew/addnew.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';



export const routes: Routes = [
  {path:'', component:HerosComponent},
  {path:'hero/:id/:name', component:HerodetailsComponent},
  {path:'DataForm' , component:AddnewComponent}
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule]
})
export class InfoRoutingModule {}
