import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinkComponent } from './link/link.component';
import { UniversityComponent } from './university/university.component';
import { SubjectComponent } from './subject/subject.component';
import { MajorComponent } from './major/major.component';
import { WorkingFieldComponent } from './working-field/working-field.component';
import { SearchPagesRoutingModule } from './pages-routing.module';
import { PageHeaderComponent } from './page-header/page-header.component';
import { SharedModule } from '../shared/shared.module';
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
    SearchPagesRoutingModule
  ]
})
export class PagesModule { }
