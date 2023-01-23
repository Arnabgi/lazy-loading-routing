import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerModuleRoutingModule } from './customer-module-routing.module';
import { CustomerComp1Component } from './customer-comp1/customer-comp1.component';
import { CustomerComp2Component } from './customer-comp2/customer-comp2.component';


@NgModule({
  declarations: [
    CustomerComp1Component,
    CustomerComp2Component
  ],
  imports: [
    CommonModule,
    CustomerModuleRoutingModule
  ]
})
export class CustomerModuleModule { }
