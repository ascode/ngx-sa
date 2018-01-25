import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';

import { Dashboard1Component } from './dashboard1.component';


@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
  ],
  declarations: [
    Dashboard1Component
  ],
})
export class Dashboard1Module { }
