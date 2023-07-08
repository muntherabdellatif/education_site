import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as skill from "../../data/skills.json";
import { Skill } from 'src/app/shared/interfaces';
import { TranslationService } from 'src/app/services/translation.service';
import * as linksData from '../../data/links.json'

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  skill: Skill | undefined;
  skillData = skill;
  links = linksData;
  list: string[] | undefined;
  title = "";
  linksSectionTitle = "list.links";
  listTitle = "list.topics"

  constructor(private route: ActivatedRoute, private translate: TranslationService){}

  ngOnInit() {
    this.linksSectionTitle = this.translate.getTranslation(this.linksSectionTitle);
    this.listTitle = this.translate.getTranslation(this.listTitle);
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id)
        // find skill
        for (let i=0; i< this.skillData.length; i++){
          if (this.skillData[i].id === +id)
            this.skill = this.skillData[i];
        }
        // find require skill

    });
    if (this.skill) {
      this.title = this.skill.name;
      // this.list = this.skill.subjects;
    }
  }
}
