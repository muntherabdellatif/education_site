import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as universities from "../../data/universities.json";

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.scss']
})
export class UniversityComponent {
  university: any;
  universitiesData = universities;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id)
        for (let i=0; i< this.universitiesData.length; i++){
          if (this.universitiesData[i].id === +id)
            this.university = this.universitiesData[i];
        }
    });
  }
}
