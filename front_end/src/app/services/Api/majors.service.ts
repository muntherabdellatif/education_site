import { Injectable } from '@angular/core';
import { Observable, map, timer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MajorsService {
  majors = [
    {
      "id": 1,
      "name": "هندسة البرمجيات",
      "description": "هندسة البرمجيات (Software Engineering) هي فرع من فروع الهندسة الذي يعنى بتصميم وتطوير البرامج الحاسوبية بشكل مهني ومنهجي. تعتمد هذه الهندسة على مجموعة من المنهجيات والأدوات والتقنيات الهندسية التي تهدف إلى تحسين جودة البرمجيات وزيادة كفاءة عملية تطويرها.",
      "university": "الجامعة الاردنية",
      "image": "software-eng.jpg",
      "rate": [0,20,0,50,100],
      "is_liked": false,
      "hours": 140,
      "competitive_gpa": 85,
      "not_competitive_gpa": 70,
      "competitive_prise": 30,
      "not_competitive_prise": 60,
      "classification": "هندسة"
    },
    {
      "id": 2,
      "name": "علم الحاسوب",
      "description": "تخصص علم الحاسوب هو فرع من العلوم الحاسوبية يهتم بدراسة التصميم والتطوير واستخدام الحواسيب والأنظمة المعلوماتية. يهدف علم الحاسوب إلى فهم العمليات المنطقية والرياضية والتقنيات التي تكمن وراء بناء الحواسيب وتطبيقاتها المختلفة.تتضمن مجالات دراسة علم الحاسوب عدة مواضيع مهمة مثل عمارة الحاسوب وتصميم الدوائر المنطقية ونظم التشغيل وشبكات الحاسوب وقواعد البيانات والذكاء الاصطناعي وتحليل البيانات وتطوير البرمجيات وتصميم واجهات المستخدم وأمن المعلومات.",
      "university": "الجامعة الاردنية",
      "image": "software-eng-02.jpg",
      "rate": [0,20,0,50,150],
      "is_liked": true,
      "hours": 120,
      "competitive_gpa": 75,
      "not_competitive_gpa": 60,
      "competitive_prise": 30,
      "not_competitive_prise": 60,
      "classification": "تكنولوجيا معلزمات"
    },
    {
      "id": 3,
      "name": "طب الاسنان",
      "description": "تخصص طب الأسنان هو فرع من العلوم الطبية الذي يركز على الصحة الفموية والأسنان. يهتم طب الأسنان بتشخيص وعلاج ووقاية الأمراض والمشاكل المرتبطة بالفم والأسنان واللثة والفكين والعظام المحيطة.",
      "university": "الجامعة الاردنية",
      "image": "dentistry.jpg",
      "rate": [0,20,0,100,150],
      "is_liked": true,
      "hours": 120,
      "competitive_gpa": 75,
      "not_competitive_gpa": 60,
      "competitive_prise": 30,
      "not_competitive_prise": 60,
      "classification": "طب"
    },
    {
      "id": 4,
      "name": "أستاذ رياضيات",
      "description": "تخصص استاذ الرياضيات يرتبط بتدريس وتبليغ المفاهيم والمبادئ الرياضية للطلاب في مختلف المستويات التعليمية. يعمل الاستاذ في المدارس الابتدائية والثانوية والجامعات، حيث يقوم بتوصيل المعرفة وتطوير مهارات الطلاب في مجال الرياضيات.",
      "university": "الجامعة الاردنية",
      "image": "teacher.jpg",
      "rate": [0,200,0,100,150],
      "fans": 12,
      "is_liked": true,
      "hours": 120,
      "competitive_gpa": 75,
      "not_competitive_gpa": 60,
      "competitive_prise": 30,
      "not_competitive_prise": 60,
      "classification": "تعليم"
    }
  ]
  major = this.majors[0];
  constructor() { }

  getMajorById(id: number) : Observable<any>{
    for (let i=0; i< this.majors.length; i++){
      if (this.majors[i].id === +id)
        this.major = this.majors[i];
    }
    return timer(2000).pipe(
      map(() => this.major)
    );
  }

  getMajorByUniversityId(id: number) : Observable<any> {
    return timer(2000).pipe(
      map(() => this.majors)
    );
  }
}
