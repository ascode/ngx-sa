import { style } from '@angular/core/core';
import { Component } from '@angular/core';

@Component({
  selector: 'hot-tables',
  styleUrls: ['./hotTables-test.scss'],
  template: `
    <div class="container">
      <handsontable-section class="col-md-12"></handsontable-section>
    </div>
  `
})
export class HotTablesTestComponent {
}
