import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginviewComponent } from './loginview/loginview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {LoginserviceService} from './loginview/loginservice.service'




@NgModule({
  declarations: [LoginviewComponent],
  exports: [LoginviewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)

  ],
  providers: [LoginserviceService]
})
export class LoginModule {
  constructor()
  {
    console.log('loading login page');
  }
 }

