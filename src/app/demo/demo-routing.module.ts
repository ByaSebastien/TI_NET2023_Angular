import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './demo01/demo01.component';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';
import { Demo05Component } from './demo05/demo05.component';
import { Demo06Component } from './demo06/demo06.component';
import { Demo07Component } from './demo07/demo07.component';
import { TargetComponent } from './demo07/target/target.component';
import { isauthGuard } from '../shared/isauth.guard';
import { Demo08Component } from './demo08/demo08.component';
import { CreateComponent } from './demo08/create/create.component';

const routes: Routes = [
  { path: "", redirectTo: "demo01", pathMatch: "full" },
  { path: "demo01", component: Demo01Component },
  { path: "demo02", component: Demo02Component },
  { path: "demo03", component: Demo03Component },
  { path: "demo04", component: Demo04Component },
  { path: "demo05", component: Demo05Component },
  { path: "demo06", component: Demo06Component },
  { path: "demo07", canActivate: [isauthGuard], component: Demo07Component },
  { path: "demo08", component: Demo08Component },
  { path: "demo08/create", component: CreateComponent },
  { path: "target/:id", component: TargetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
