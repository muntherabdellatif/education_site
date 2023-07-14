import { Component } from '@angular/core';
import * as workingFields from "../../data/working-fields.json";
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from 'src/app/services/translation.service';
import { Link, WorkingField } from 'src/app/shared/interfaces';
import * as skillsData from "../../data/skills.json";
import { LinksService } from 'src/app/services/Api/links.service';

@Component({
  selector: 'app-working-field',
  templateUrl: './working-field.component.html',
  styleUrls: ['./working-field.component.scss']
})
export class WorkingFieldComponent {
  workingField: WorkingField | undefined;
  workingFieldsData = workingFields;
  links: Link[] = [];
  skills = skillsData;
  listTitle = "list.paths";
  linksSectionTitle = "list.links";
  skillsSectionTitle = "list.skills";
  fieldList: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private translate: TranslationService,
    private linksService: LinksService
  ){}

  ngOnInit() {
    this.listTitle = this.translate.getTranslation(this.listTitle);
    this.linksSectionTitle = this.translate.getTranslation(this.linksSectionTitle);
    this.skillsSectionTitle = this.translate.getTranslation(this.skillsSectionTitle);

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        // get workingField
        for (let i=0; i< this.workingFieldsData.length; i++){
          if (this.workingFieldsData[i].id === +id)
            this.workingField = this.workingFieldsData[i];
        }
        this.linksService.getLinksByWorkingFieldId(+id).subscribe(data => {
          this.links = data;
        });
        // get Available paths
        for (let i=0; i< this.workingFieldsData.length; i++){
          if (this.workingFieldsData[i].related_to_field === this.workingField?.id)
            this.fieldList.push(this.workingFieldsData[i].name);
        }
      }
    });
  }
}
