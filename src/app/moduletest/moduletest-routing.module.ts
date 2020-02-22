import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompaComponent } from './compa/compa.component';


export const routes: Routes = [
  {path:"",component:CompaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuletestRoutingModule { }
