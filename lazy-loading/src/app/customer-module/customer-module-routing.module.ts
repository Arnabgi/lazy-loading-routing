import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComp1Component } from './customer-comp1/customer-comp1.component';
import { CustomerComp2Component } from './customer-comp2/customer-comp2.component';

const routes: Routes = [
  {path:'customer-comp1', component:CustomerComp1Component},
  {path:'customer-comp2', component:CustomerComp2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerModuleRoutingModule { }
