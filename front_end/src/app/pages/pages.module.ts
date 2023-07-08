import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link/link.component';
import { UniversityComponent } from './university/university.component';
import { SubjectComponent } from './subject/subject.component';
import { MajorComponent } from './major/major.component';
import { WorkingFieldComponent } from './working-field/working-field.component';
import { SearchPagesRoutingModule } from './pages-routing.module';
import { PageHeaderComponent } from './page-header/page-header.component';
import { TableCardModule } from '../table-card/table-card.module';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LinkComponent,
    UniversityComponent,
    SubjectComponent,
    MajorComponent,
    WorkingFieldComponent,
    PageHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SearchPagesRoutingModule,
    TableCardModule,
    FontAwesomeModule
  ]
})
export class PagesModule { }
