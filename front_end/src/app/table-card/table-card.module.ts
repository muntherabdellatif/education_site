import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { TableCardComponent } from './table-card/table-card.component';

@NgModule({
  declarations: [
    TableComponent,
    CardComponent,
    TableCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    CardComponent,
    TableCardComponent
  ]
})
export class TableCardModule { }
