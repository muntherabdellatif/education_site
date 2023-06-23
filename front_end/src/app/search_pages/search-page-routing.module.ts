import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversitiesComponent } from './universities/universities.component';
import { WorkingFieldsComponent } from './working-fields/working-fields.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { LinksComponent } from './links/links.component';
import { MajorsComponent } from './majors/majors.component';

const routes: Routes = [
  { path: 'universities', component: UniversitiesComponent },
  { path: 'working-fields', component: WorkingFieldsComponent },
  { path: 'subjects', component: SubjectsComponent },
  { path: 'links', component: LinksComponent },
  { path: 'majors', component: MajorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SearchPagesRoutingModule { }
