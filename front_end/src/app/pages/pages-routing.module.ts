import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityComponent } from './university/university.component';
import { WorkingFieldComponent } from './working-field/working-field.component';
import { SubjectComponent } from './subject/subject.component';
import { LinkComponent } from './link/link.component';
import { MajorComponent } from './major/major.component';

const routes: Routes = [
  { path: 'university/:id', component: UniversityComponent },
  { path: 'working-field/:id', component: WorkingFieldComponent },
  { path: 'subject/:id', component: SubjectComponent },
  { path: 'link/:id', component: LinkComponent },
  { path: 'major/:id', component: MajorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SearchPagesRoutingModule { }
