import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class LeavemanageService {
  constructor(private router: Router) {}
  leaveday = [
    {
      sdate: "12-09-2019",
      edate: "15-09-2019",
      leaveType: "casule",
      description: "seek"
    },
    {
      sdate: "12-09-2019",
      edate: "15-09-2019",
      leaveType: "casule",
      description: "seek"
    }
  ];

  addleave(model: any) {
    this.leaveday.push(model);
    console.log(this.leaveday[0].sdate);
    if (this.leaveday.length > 2) {
      this.router.navigate(["/leave/grid"]);
    }
  }
}
