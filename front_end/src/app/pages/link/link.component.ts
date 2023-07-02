import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as links from "../../data/links.json";
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {
  link: any;
  linksData = links;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id)
        for (let i=0; i< this.linksData.length; i++){
          if (this.linksData[i].id === +id)
            this.link = this.linksData[i];
        }
    });
  }
}
