import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { TableCardComponent } from './table-card/table-card.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FiltersComponent } from './filters/filters.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    CardComponent,
    TableCardComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule
  ],
  exports: [
    TableComponent,
    CardComponent,
    TableCardComponent,
  ]
})
export class TableCardModule { }
