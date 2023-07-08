import { Component } from '@angular/core';
import * as workingFields from "../../data/working-fields.json";
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from 'src/app/services/translation.service';
import { WorkingField } from 'src/app/shared/interfaces';
import * as linksData from '../../data/links.json'
import * as skillsData from "../../data/skills.json";


@Component({
  selector: 'app-working-field',
  templateUrl: './working-field.component.html',
  styleUrls: ['./working-field.component.scss']
})
export class WorkingFieldComponent {
  workingField: WorkingField | undefined;
  workingFieldsData = workingFields;  constructor(private route: ActivatedRoute, private translate: TranslationService){}
  links = linksData;
  skills = skillsData;
  listTitle = "list.paths";
  linksSectionTitle = "list.links";
  skillsSectionTitle = "list.skills";
  fieldList: string[] = [];

  ngOnInit() {
    this.listTitle = this.translate.getTranslation(this.listTitle);
    this.linksSectionTitle = this.translate.getTranslation(this.linksSectionTitle);
    this.skillsSectionTitle = this.translate.getTranslation(this.skillsSectionTitle);

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id)
        // get workingField
        for (let i=0; i< this.workingFieldsData.length; i++){
          if (this.workingFieldsData[i].id === +id)
            this.workingField = this.workingFieldsData[i];
        }
        // get Available paths
        for (let i=0; i< this.workingFieldsData.length; i++){
          if (this.workingFieldsData[i].related_to_field === this.workingField?.id)
            this.fieldList.push(this.workingFieldsData[i].name);
        }
    });
  }
}
