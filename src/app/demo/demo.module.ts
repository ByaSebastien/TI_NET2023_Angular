import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo01Component } from './demo01/demo01.component';
import { SharedModule } from '../shared/shared.module';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';
import { EnfantComponent } from './demo04/enfant/enfant.component';


@NgModule({
  declarations: [
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    EnfantComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
