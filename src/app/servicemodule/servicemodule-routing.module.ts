import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InputfieldComponent } from './inputfield/inputfield.component';
import { AddbuttonComponent } from './addbutton/addbutton.component';


export const routes: Routes = [
  {path : "",component: InputfieldComponent},
  {path : "addbutton",component: AddbuttonComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicemoduleRoutingModule { }
