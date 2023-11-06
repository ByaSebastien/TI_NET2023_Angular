import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExoComponent } from './exo.component';
import { Exo01Component } from './exo01/exo01.component';
import { Exo02Component } from './exo02/exo02.component';

const routes: Routes = [
  { path: "", component: ExoComponent },
  { path: "exo01", component: Exo01Component },
  { path: "exo02", component: Exo02Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExoRoutingModule { }
