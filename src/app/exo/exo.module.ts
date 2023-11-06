import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { Exo01Component } from './exo01/exo01.component';
import { SharedModule } from '../shared/shared.module';
import { Exo02Component } from './exo02/exo02.component';
import { Exo02EnfantComponent } from './exo02/exo02-enfant/exo02-enfant.component';


@NgModule({
  declarations: [
    ExoComponent,
    Exo01Component,
    Exo02Component,
    Exo02EnfantComponent
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }
