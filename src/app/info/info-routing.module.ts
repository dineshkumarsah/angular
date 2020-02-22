import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import {TechnologyComponent} from './technology/technology.component'


export const routes: Routes = [
  { path: "contact", component: ContactComponent },
  { path: "technology", component:  TechnologyComponent }
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule]
})
export class InfoRoutingModule {}
