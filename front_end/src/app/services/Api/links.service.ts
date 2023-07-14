import { Injectable } from '@angular/core';
import { Observable, map, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinksService {
  links = [
    {
      "id": 1,
      "name": "Top 35 Programming Courses in udemy in 2017",
      "description": "",
      "source": "ONLINE ENGINEERING COURSES",
      "major": "هندسة البرمجيات",
      "subject": null,
      "image_link": "software-eng.jpg",
      "type": "article" ,
      "rate": [2,9,10,35,150],
      "is_liked": true
    },
    {
      "id": 2,
      "name": "BECOME A DATA SCIENTIST",
      "description": "",
      "source": "datasciencefolks.blogspot.com",
      "major": "هندسة البرمجيات",
      "subject": null,
      "image_link": "software-eng-02.jpg",
      "type": "article" ,
      "rate": [2,3,5,10,150],
      "is_liked": false
    },
    {
      "id": 3,
      "name": "React fall course in 2023",
      "description": "",
      "source": "Udemy",
      "major": "هندسة البرمجيات",
      "subject": null,
      "image_link": "software-eng-03.jpg",
      "type": "course" ,
    "rate": [2,3,20,40,350],
      "is_liked": true
    },
    {
      "id": 4,
      "name": "Anguler from 0 to hero",
      "description": "",
      "source": "Udemy",
      "major": "هندسة البرمجيات",
      "subject": null,
      "image_link": "software-eng-04.jpg",
      "type": "course" ,
      "rate": [10,20,30,40,50],
      "is_liked": false
    }
  ]

  constructor() {}

  getLinksByMajorId(majorId: number): Observable<any> {
    return timer(2000).pipe(
      map(() => this.links)
    );
  }

  getLinksBySkillId(skillId: number): Observable<any> {
    return timer(2000).pipe(
      map(() => this.links)
    );
  }

  getLinksBySubjectId(subjectId: number): Observable<any> {
    return timer(2000).pipe(
      map(() => this.links)
    );
  }

  getLinksByWorkingFieldId(workingFieldId: number): Observable<any> {
    return timer(2000).pipe(
      map(() => this.links)
    );
  }

  getLinks(): Observable<any> {
    return timer(2000).pipe(
      map(() => this.links)
    );
  }
}
