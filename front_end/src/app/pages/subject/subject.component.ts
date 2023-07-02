import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as subjects from "../../data/subjects.json";
@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent {
  subject: any;
  subjectsData = subjects;

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id)
        for (let i=0; i< this.subjectsData.length; i++){
          if (this.subjectsData[i].id === +id)
            this.subject = this.subjectsData[i];
        }
    });
  }
}
