import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo01Component } from './demo01/demo01.component';
import { SharedModule } from '../shared/shared.module';
import { Demo02Component } from './demo02/demo02.component';


@NgModule({
  declarations: [
    Demo01Component,
    Demo02Component
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
