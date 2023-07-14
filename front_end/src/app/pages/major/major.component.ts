import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Link, Major } from 'src/app/shared/interfaces';
import { TranslationService } from 'src/app/services/translation.service';
import * as subjectsData from '../../data/subjects.json'
import * as workingFieldsData from "../../data/working-fields.json";
import { LinksService } from 'src/app/services/Api/links.service';
import { MajorsService } from 'src/app/services/Api/majors.service';

@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss']
})
export class MajorComponent {
  major: Major | undefined;
  title = "";
  subjects = subjectsData;
  workingFields = workingFieldsData;
  links: Link[] = [];
  subjectsSectionTitle = "list.subjects";
  workingFieldsSectionTitle = "list.paths";
  linksSectionTitle = "list.links";
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private translate: TranslationService,
    private linksService: LinksService,
    private majorService: MajorsService
  ){}

  ngOnInit() {
    this.subjectsSectionTitle = this.translate.getTranslation(this.subjectsSectionTitle);
    this.workingFieldsSectionTitle = this.translate.getTranslation(this.workingFieldsSectionTitle);
    this.linksSectionTitle = this.translate.getTranslation(this.linksSectionTitle);

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.majorService.getMajorById(+id).subscribe(data => {
          this.major = data;
          this.linksService.getLinksByMajorId(+id).subscribe(data => {
            this.links = data;
            this.isLoading = false;
          });
        })
      }
    });
    if (this.major)
      this.title = this.translate.getTitle([this.major.university, this.major.name]);
  }
}
