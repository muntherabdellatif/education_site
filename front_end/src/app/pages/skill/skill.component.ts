import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as skill from "../../data/skills.json";
import { Link, Skill } from 'src/app/shared/interfaces';
import { TranslationService } from 'src/app/services/translation.service';
import { LinksService } from 'src/app/services/Api/links.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  skill: Skill | undefined;
  skillData = skill;
  links: Link[] = [];
  list: string[] = [];
  title = "";
  linksSectionTitle = "list.links";
  listTitle = "list.skills"

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
      if (id) {
        // find skill
        for (let i=0; i< this.skillData.length; i++){
          if (this.skillData[i].id === +id)
            this.skill = this.skillData[i];
          // find require skill
          this.list?.push(this.skillData[i].name);
        }
        this.linksService.getLinksBySkillId(+id).subscribe(data => {
          this.links = data;
        });
      }
    });
    if (this.skill) {
      this.title = this.skill.name;
      // this.list = this.skill.subjects;
    }
  }
}
