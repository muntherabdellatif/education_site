import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as subjects from "../../data/subjects.json";
import { Link, Subject } from 'src/app/shared/interfaces';
import { TranslationService } from 'src/app/services/translation.service';
import { LinksService } from 'src/app/services/Api/links.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  subject: Subject | undefined;
  subjectsData = subjects;
  links: Link[] = [];
  list: string[] | undefined;
  title = "";
  linksSectionTitle = "list.links";
  listTitle = "list.topics"

  constructor(
    private route: ActivatedRoute,
    private translate: TranslationService,
    private linksService: LinksService
  ){}

  ngOnInit() {
    this.linksSectionTitle = this.translate.getTranslation(this.linksSectionTitle);
    this.listTitle = this.translate.getTranslation(this.listTitle);
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id){
        for (let i=0; i< this.subjectsData.length; i++){
          if (this.subjectsData[i].id === +id)
            this.subject = this.subjectsData[i];
        }
        this.linksService.getLinksBySubjectId(+id).subscribe(data => {
          this.links = data;
        });
      }
    });
    if (this.subject) {
      this.title = this.translate.getTitle([this.subject.university, this.subject.major, this.subject.name]);
      this.list = this.subject.subjects;
    }
  }
}
