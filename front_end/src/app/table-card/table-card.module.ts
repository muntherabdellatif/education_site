import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { TableCardComponent } from './table-card/table-card.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    TableComponent,
    CardComponent,
    TableCardComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    TableComponent,
    CardComponent,
    TableCardComponent,
  ]
})
export class TableCardModule { }
