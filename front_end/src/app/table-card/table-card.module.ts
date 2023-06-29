import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { TableCardComponent } from './table-card/table-card.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardRateComponent } from './card-rate/card-rate.component';
import { FiltersComponent } from './filters/filters.component';
@NgModule({
  declarations: [
    TableComponent,
    CardComponent,
    TableCardComponent,
    CardRateComponent,
    FiltersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule
  ],
  exports: [
    TableComponent,
    CardComponent,
    TableCardComponent,
    CardRateComponent
  ]
})
export class TableCardModule { }
