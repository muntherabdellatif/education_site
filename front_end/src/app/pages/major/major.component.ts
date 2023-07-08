import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as majors from "../../data/majors.json";
import { Major } from 'src/app/shared/interfaces';
import { TranslationService } from 'src/app/services/translation.service';
import * as subjectsData from '../../data/subjects.json'
import * as linksData from '../../data/links.json'
import * as workingFieldsData from "../../data/working-fields.json";

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss']
})
export class MajorComponent {
  major: Major | undefined;
  majorsData = majors;
  title = "";
  subjects = subjectsData;
  workingFields = workingFieldsData;
  links = linksData;
  subjectsSectionTitle = "list.subjects";
  workingFieldsSectionTitle = "list.paths";
  linksSectionTitle = "list.links";

  constructor(private route: ActivatedRoute, private translate: TranslationService){}

  ngOnInit() {
    this.subjectsSectionTitle = this.translate.getTranslation(this.subjectsSectionTitle);
    this.workingFieldsSectionTitle = this.translate.getTranslation(this.workingFieldsSectionTitle);
    this.linksSectionTitle = this.translate.getTranslation(this.linksSectionTitle);

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id)
        for (let i=0; i< this.majorsData.length; i++){
          if (this.majorsData[i].id === +id)
            this.major = this.majorsData[i];
        }
    });
    if (this.major)
      this.title = this.translate.getTitle([this.major.university, this.major.name]);
  }
}
