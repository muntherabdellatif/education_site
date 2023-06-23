import { Component } from '@angular/core';
import * as majorsData from '../../data/majors.json'

@Component({
  selector: 'app-majors',
  templateUrl: './majors.component.html',
  styleUrls: ['./majors.component.scss']
})
export class MajorsComponent {
  data = majorsData;
}
