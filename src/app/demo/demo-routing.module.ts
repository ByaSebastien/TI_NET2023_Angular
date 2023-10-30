import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo01Component } from './demo01/demo01.component';

const routes: Routes = [
  { path: "", redirectTo: "demo01", pathMatch: "full" },
  { path: "demo01", component: Demo01Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
