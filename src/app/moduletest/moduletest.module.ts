import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { ModuletestRoutingModule } from './moduletest-routing.module';
import { CompaComponent } from './compa/compa.component';
import { CompbComponent } from './compb/compb.component';
import {routes} from './moduletest-routing.module';


@NgModule({
  declarations: [CompaComponent, CompbComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ModuletestRoutingModule
  ]
})
export class ModuletestModule { }
