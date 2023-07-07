import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as majors from "../../data/majors.json";
import { Major } from 'src/app/shared/interfaces';
@Component({
  selector: 'app-major',
  templateUrl: './major.component.html',
  styleUrls: ['./major.component.scss']
})
export class MajorComponent {
  major: Major | undefined;
  majorsData = majors;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id)
        for (let i=0; i< this.majorsData.length; i++){
          if (this.majorsData[i].id === +id)
            this.major = this.majorsData[i];
        }
    });
  }
}
