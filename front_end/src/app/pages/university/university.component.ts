import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as universities from "../../data/universities.json";
import { University } from 'src/app/shared/interfaces';
import * as majorsData from '../../data/majors.json'
import { TranslationService } from 'src/app/services/translation.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent {
  university: University | undefined;
  universitiesData = universities;
  majors = majorsData;
  majorsSectionTitle = "list.majors";
  constructor(private route: ActivatedRoute, private translation: TranslationService){}

  ngOnInit() {
    this.majorsSectionTitle = this.translation.getTranslation(this.majorsSectionTitle);
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
