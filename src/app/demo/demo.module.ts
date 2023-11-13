import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoRoutingModule } from './demo-routing.module';
import { Demo01Component } from './demo01/demo01.component';
import { SharedModule } from '../shared/shared.module';
import { Demo02Component } from './demo02/demo02.component';
import { Demo03Component } from './demo03/demo03.component';
import { Demo04Component } from './demo04/demo04.component';
import { EnfantComponent } from './demo04/enfant/enfant.component';
import { Demo05Component } from './demo05/demo05.component';
import { Demo06Component } from './demo06/demo06.component';
import { Demo07Component } from './demo07/demo07.component';
import { TargetComponent } from './demo07/target/target.component';
import { Demo08Component } from './demo08/demo08.component';
import { CreateComponent } from './demo08/create/create.component';


@NgModule({
  declarations: [
    Demo01Component,
    Demo02Component,
    Demo03Component,
    Demo04Component,
    EnfantComponent,
    Demo05Component,
    Demo06Component,
    Demo07Component,
    TargetComponent,
    Demo08Component,
    CreateComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    SharedModule
  ]
})
export class DemoModule { }
