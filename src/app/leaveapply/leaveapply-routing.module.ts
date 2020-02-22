import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LeaveapplyformComponent } from "./leaveapplyform/leaveapplyform.component";
import { LeaveapplygridComponent } from "./leaveapplygrid/leaveapplygrid.component";

export const routes: Routes = [
  { path: "form", component: LeaveapplyformComponent },
  { path: "grid", component: LeaveapplygridComponent }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule]
})
export class LeaveapplyRoutingModule {}
