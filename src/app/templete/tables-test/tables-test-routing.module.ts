import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesTestComponent } from './tables-test.component';
import { SmartTableTestComponent } from './smart-table-test/smart-table-test.component';
import { HotTablesTestComponent } from './hotTables-test/hotTables-test.component';
import { HandsontableSectionComponent } from './hotTables-test/handsontable-test-section';
import { BasicDemoComponent } from './hotTables-test/handsontable-test/basic-demo';
import { AdvancedDemoComponent } from './hotTables-test/handsontable-test/advanced-demo';

const routes: Routes = [{
  path: '',
  component: TablesTestComponent,
  children: [{
    path: 'smart-table',
    component: SmartTableTestComponent,
  }, {
      path: 'handsontable',
      component: HotTablesTestComponent,
    }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesTestComponent,
  SmartTableTestComponent,
  HotTablesTestComponent,
  HandsontableSectionComponent,
  BasicDemoComponent,
  AdvancedDemoComponent,
];
