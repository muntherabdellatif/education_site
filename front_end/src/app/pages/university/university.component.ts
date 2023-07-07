import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as universities from "../../data/universities.json";
import { University } from 'src/app/shared/interfaces';
import * as majorsData from '../../data/majors.json'

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent {
  university: University | undefined;
  universitiesData = universities;
  majors = majorsData;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id)
        for (let i=0; i< this.universitiesData.length; i++){
          if (this.universitiesData[i].id === +id)
            this.university = this.universitiesData[i];
        }
    });
  }
}
