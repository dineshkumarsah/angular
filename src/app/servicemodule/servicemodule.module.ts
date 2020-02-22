import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms'

import { ServicemoduleRoutingModule } from './servicemodule-routing.module';
import { InputfieldComponent } from './inputfield/inputfield.component';
import { AddbuttonComponent } from './addbutton/addbutton.component';
import {BridgeService} from './bridge.service'
import {routes} from './servicemodule-routing.module'


@NgModule({
  declarations: [InputfieldComponent, AddbuttonComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    ServicemoduleRoutingModule
  ],
  providers:[BridgeService]
})
export class ServicemoduleModule { }
