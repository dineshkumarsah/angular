import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRecordComponent } from './company-record.component';
import {HttpClientModule} from '@angular/common/http';
import {routes} from './company-record-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CompanyRecordComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ]
})
export class CompanyRecordModule { }
