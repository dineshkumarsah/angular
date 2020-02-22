import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators, NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { LeavemanageService } from "../leaveapplygrid/leavemanage.service";

@Component({
  selector: "app-leaveapplyform",
  templateUrl: "./leaveapplyform.component.html",
  styleUrls: ["./leaveapplyform.component.css"]
})
export class LeaveapplyformComponent implements OnInit {
  //@ViewChild("f") leaveForm: NgForm;
  @ViewChild('f', {static: false}) leaveForm: NgForm;
  leaveType: any = ["casule", "seek", "other", "other1"];
  registerForm: FormGroup;
  formData: any = {};
  defaultvalue = "cl";
  description = "";
  genders = ["male", "female"];
  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private _leavemanageService: LeavemanageService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(6)]]
    });
  }
  Addleave() {
    this._leavemanageService.addleave(this.leaveForm.value);
  }
  // Addleave(form: NgForm) {
  //   console.log(form);
  //   console.log(this.leaveForm.value);
  //   //this._leavemanageService.addleave(this.formData);
  // }
  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }
  error: any = { isError: false, errorMessage: "" };
  cancel(){
    this.route.navigate(["/leave/grid"]);

  }
  compareTwoDates() {
    if (
      new Date(this.registerForm.controls["lastName"].value) <
      new Date(this.registerForm.controls["firstName"].value)
    ) {
      this.error = {
        isError: true,
        errorMessage: "End Date can't before start date"
      };
    }
  }
}
