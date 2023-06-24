import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPagesRoutingModule } from './search-page-routing.module';
import { UniversitiesComponent } from './universities/universities.component';
import { WorkingFieldsComponent } from './working-fields/working-fields.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { LinksComponent } from './links/links.component';
import { MajorsComponent } from './majors/majors.component';
import { TableCardModule } from '../table-card/table-card.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    UniversitiesComponent,
    SubjectsComponent,
    LinksComponent,
    WorkingFieldsComponent,
    MajorsComponent,
  ],
  imports: [
    CommonModule,
    SearchPagesRoutingModule,
    TableCardModule,
    SharedModule
  ],
  exports: [
    UniversitiesComponent,
    SubjectsComponent,
    LinksComponent,
    WorkingFieldsComponent,
    MajorsComponent,
  ]
})
export class SearchPagesModule { }
