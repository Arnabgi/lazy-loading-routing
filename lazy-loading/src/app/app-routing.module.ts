import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'user', loadChildren:() => import('./user-module/user-module.module').then(mod => mod.UserModuleModule)},
  {path:'customer', loadChildren:() => import('./customer-module/customer-module.module').then(mod => mod.CustomerModuleModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
