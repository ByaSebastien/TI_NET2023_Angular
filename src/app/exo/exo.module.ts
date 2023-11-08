import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExoRoutingModule } from './exo-routing.module';
import { ExoComponent } from './exo.component';
import { Exo01Component } from './exo01/exo01.component';
import { SharedModule } from '../shared/shared.module';
import { Exo02Component } from './exo02/exo02.component';
import { Exo02EnfantComponent } from './exo02/exo02-enfant/exo02-enfant.component';
import { Exo03Component } from './exo03/exo03.component';
import { EnfantExo03Component } from './exo03/enfant-exo03/enfant-exo03.component';


@NgModule({
  declarations: [
    ExoComponent,
    Exo01Component,
    Exo02Component,
    Exo02EnfantComponent,
    Exo03Component,
    EnfantExo03Component
  ],
  imports: [
    CommonModule,
    ExoRoutingModule,
    SharedModule
  ]
})
export class ExoModule { }
