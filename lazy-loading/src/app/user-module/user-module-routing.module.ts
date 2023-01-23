import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComp1Component } from './user-comp1/user-comp1.component';
import { UserComp2Component } from './user-comp2/user-comp2.component';

const routes: Routes = [
  {path:'user-comp1', component:UserComp1Component},
  {path:'user-comp2', component:UserComp2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
