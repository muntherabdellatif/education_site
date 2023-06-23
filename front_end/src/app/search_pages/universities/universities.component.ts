import { Component } from '@angular/core';
import * as universitiesData from '../../data/universities.json';

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent {
  data = universitiesData;
}
