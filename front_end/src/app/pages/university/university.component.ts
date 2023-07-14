import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as universities from "../../data/universities.json";
import { Major, University } from 'src/app/shared/interfaces';
import { TranslationService } from 'src/app/services/translation.service';
import { MajorsService } from 'src/app/services/Api/majors.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent {
  university: University | undefined;
  universitiesData = universities;
  majors: Major[] =  [];
  majorsSectionTitle = "list.majors";
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private translation: TranslationService,
    private majorsService: MajorsService
  ){}

  ngOnInit() {
    this.majorsSectionTitle = this.translation.getTranslation(this.majorsSectionTitle);
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        for (let i=0; i< this.universitiesData.length; i++){
          if (this.universitiesData[i].id === +id)
            this.university = this.universitiesData[i];
        }
        this.majorsService.getMajorByUniversityId(+id).subscribe(data => {
          this.majors = data;
          this.isLoading = false;
        });
      }
    });
  }
}
