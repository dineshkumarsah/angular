import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { TechnologyComponent } from './technology/technology.component';
import {routes} from './info-routing.module';
import { RouterModule } from "@angular/router";


@NgModule({
  declarations: [ContactComponent, TechnologyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InfoModule { }
