import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import {CompanyRecordComponent} from './company-record.component'


export const routes: Routes = [
  { path: "", component: CompanyRecordComponent },
 
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule]
})
export class CompanyRecordRoutingModule {}
