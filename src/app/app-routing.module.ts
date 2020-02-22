import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ModuletestModule } from './moduletest/moduletest.module';
import { ServicemoduleModule } from './servicemodule/servicemodule.module';


export const routes: Routes = [
  {
    path: "home",
    loadChildren:() => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "leave",
    loadChildren: () =>
      import("./leaveapply/leaveapply.module").then(m => m.LeaveapplyModule)
  },
  {
    path: "info",
    loadChildren: () =>
      import("./info/info.module").then(m => m.InfoModule)
  },
  {
    path: "company-record",
    loadChildren: () =>
      import("./company-record/company-record.module").then(m => m.CompanyRecordModule)
  },
  
  
  
  {
    path:"moduletest",
    loadChildren:()=>import("./moduletest/moduletest.module").then(m=>ModuletestModule)
  },
  {
    path : "servicemodule",
    loadChildren:()=>import("./servicemodule/servicemodule.module").then(m=>ServicemoduleModule)
  },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
