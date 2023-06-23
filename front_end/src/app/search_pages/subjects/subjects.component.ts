import { Component } from '@angular/core';
import * as subjectsData from '../../data/subjects.json';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {
  data = subjectsData;
}
