import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { TableCardComponent } from './table-card/table-card.component';
import { TranslationPipe } from '../pipes/translation.pipe';
@NgModule({
  declarations: [
    TableComponent,
    CardComponent,
    TableCardComponent,
    TranslationPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    CardComponent,
    TableCardComponent,
    TranslationPipe
  ]
})
export class TableCardModule { }
