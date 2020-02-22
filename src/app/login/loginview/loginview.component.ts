import { Component, OnInit } from "@angular/core";
import { LoginserviceService } from "./loginservice.service";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";


@Component({
  selector: "app-loginview",
  templateUrl: "./loginview.component.html",
  styleUrls: ["./loginview.component.css"]
})
export class LoginviewComponent implements OnInit {
  isEmailValid:boolean;
  isPassword:boolean;
  username:string;
  password:string;
  logincon: boolean = false;

  constructor(
    protected fb: FormBuilder,
    public router: Router,
    private loginservice: LoginserviceService
  ) {}
  /**
   * form creation without using formbuilder
   */
  // loginForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  //   gender: new FormControl('')

  // });

  /**
   * creation of form using formBuilder helper class
   */

loginForm=this.fb.group({
  userName:['',[Validators.required,Validators.email]],
  password:[null,[Validators.required,Validators.minLength(6)]],
  gender:['']

})

  ngOnInit() {}
  validateMe(){
    this.isEmailValid=this.f.userName.valid; 
    this.isPassword=this.f.password.valid;
  }
  get f(){
    return this.loginForm.controls;
  }
  onSubmit() {
    this.username = this.loginForm.controls.userName.value;
    this.password = this.loginForm.controls.password.value;
   
   console.log(this.loginForm);
   
    this.loginservice.getDetails().subscribe(data => {
      if (data[0].user == this.username && data[0].pass == this.password) {
        alert( JSON.stringify(this.loginForm.value, null, 4));
        //alert(this.loginForm.value); //output [object Object]
        this.router.navigate(["/leave/grid"]);
      } else {
        this.logincon = true;
        setTimeout(() => {
          this.logincon = false;
        }, 2000);
      }
    });
  }
}
