import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { TempleteComponent } from './templete.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';

const routes: Routes = [{
  path: '',
  component: TempleteComponent,
  children: [{
    path: 'dashboard',
    component: Dashboard1Component,
    }, 
    {
      path: 'tables',
      loadChildren: './tables-test/tables-test.module#TablesTestModule',
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempleteRoutingModule {
}
