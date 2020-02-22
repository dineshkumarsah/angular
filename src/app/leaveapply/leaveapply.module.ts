import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LeaveapplyformComponent } from "./leaveapplyform/leaveapplyform.component";
import { LeaveapplygridComponent } from "./leaveapplygrid/leaveapplygrid.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { routes } from "./leaveapply-routing.module";
import {GridModule} from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [LeaveapplyformComponent, LeaveapplygridComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    GridModule,
    RouterModule.forChild(routes)
  ],
  exports: [LeaveapplyformComponent, LeaveapplygridComponent],
  providers: []
})
export class LeaveapplyModule {
  constructor() {
    console.log("loading leaveapply");
  }
}
