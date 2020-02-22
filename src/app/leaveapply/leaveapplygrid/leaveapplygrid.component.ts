import { Component, OnInit } from "@angular/core";
import { LeavemanageService } from "./leavemanage.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-leaveapplygrid",
  templateUrl: "./leaveapplygrid.component.html",
  styleUrls: ["./leaveapplygrid.component.css"]
})
export class LeaveapplygridComponent {
  formData: any = {};
  model: any = {};
  constructor(
    public _leavemanageService: LeavemanageService,
    private router: Router
  ) {
    this.formData = this._leavemanageService.leaveday;
    
    
  }

  addrecord() {
    this.router.navigate(["/leave/form"]);
  }
}
