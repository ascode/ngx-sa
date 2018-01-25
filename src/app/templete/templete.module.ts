import { NgModule } from '@angular/core';

import { TempleteComponent } from './templete.component';
import { Dashboard1Module } from './dashboard1/dashboard1.module';
import { TempleteRoutingModule } from './templete-routing.module';
import { ThemeModule } from '../@theme/theme.module';

const PAGES_COMPONENTS = [
  TempleteComponent,
];

@NgModule({
  imports: [
    TempleteRoutingModule,
    ThemeModule,
    Dashboard1Module,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ],
})
export class TempleteModule {
}
