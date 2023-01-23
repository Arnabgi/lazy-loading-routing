import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserModuleRoutingModule } from './user-module-routing.module';
import { UserComp1Component } from './user-comp1/user-comp1.component';
import { UserComp2Component } from './user-comp2/user-comp2.component';


@NgModule({
  declarations: [
    UserComp1Component,
    UserComp2Component
  ],
  imports: [
    CommonModule,
    UserModuleRoutingModule
  ]
})
export class UserModuleModule { }
