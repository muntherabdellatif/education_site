import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityComponent } from './university/university.component';
import { WorkingFieldComponent } from './working-field/working-field.component';
import { SubjectComponent } from './subject/subject.component';
import { MajorComponent } from './major/major.component';
import { SkillComponent } from './skill/skill.component';

const routes: Routes = [
  { path: 'university/:id', component: UniversityComponent },
  { path: 'working-field/:id', component: WorkingFieldComponent },
  { path: 'subject/:id', component: SubjectComponent },
  { path: 'major/:id', component: MajorComponent },
  { path: 'skill/:id', component: SkillComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class SearchPagesRoutingModule { }
