import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent {
  @Input() data: any;
  @Input() dataType: "links" | "majors" | "subjects" | "universities" | "workingFields" = "links";

  isTable = false;
  tableData: any;
  cards: any;

  tablesData = {
    links: [
      {name: "tables.links.name" , value: "name"},
      {name: "tables.links.source" , value: "source"},
      {name: "tables.links.major" , value: "major"},
      {name: "tables.links.subject" , value: "subject"},
    ],
    majors: [
      {name: "tables.majors.name" , value: "name"},
      {name: "tables.majors.university" , value: "university"},
      {name: "tables.majors.hours" , value: "hours"},
      {name: "tables.majors.competitive_prise" , value: "competitive_prise"},
      {name: "tables.majors.not_competitive_prise" , value: "not_competitive_prise"},
      {name: "tables.majors.classification" , value: "classification"},
    ],
    subjects: [
      {name: "tables.subjects.name" , value: "name"},
      {name: "tables.subjects.major" , value: "major"},
      {name: "tables.subjects.university" , value: "university"},
      {name: "tables.subjects.compulsory_or_optional" , value: "compulsory_or_optional"},
      {name: "tables.subjects.hours" , value: "hours"},
      {name: "tables.subjects.prerequisite" , value: "prerequisite"},
    ],
    universities: [
      {name: "tables.universities.name" , value: "name"},
      {name: "tables.universities.location" , value: "location"},
      {name: "tables.universities.government_or_private" , value: "government_or_private"},
    ],
    workingFields: [],
  }
  cardsData = {
    links: [
      {name: "image", value: "image_link"},
      {name: "textTop", value: null},
      {name: "textBottom", value: null},
      {name: "title", value: "name"},
      {name: "subTitle", value: "source"},
      {name: "extraText", value: null},
      {name: "rate", value: "rate"},
      {name: "fans", value: "fans"},
      {name: "is_liked", value: "is_liked"},
    ],
    majors: [
      {name: "image", value: "image"},
      {name: "textTop", value: "hours"},
      {name: "textBottom", value: "prise"},
      {name: "title", value: "name"},
      {name: "subTitle", value: "university"},
      {name: "extraText", value: null},
      {name: "rate", value: "rate"},
      {name: "fans", value: "fans"},
      {name: "is_liked", value: "is_liked"},
    ],
    subjects: [
      {name: "image", value: "image"},
      {name: "textTop", value: "hours"},
      {name: "textBottom", value: null},
      {name: "title", value: "name"},
      {name: "subTitle", value: "university"},
      {name: "extraText", value: "major"},
      {name: "rate", value: "rate"},
      {name: "fans", value: "fans"},
      {name: "is_liked", value: "is_liked"},
    ],
    universities: [
      {name: "image", value: "image"},
      {name: "textTop", value: "government_or_private"},
      {name: "textBottom", value: null},
      {name: "title", value: "name"},
      {name: "subTitle", value: "location"},
      {name: "extraText", value: null},
      {name: "rate", value: "rate"},
      {name: "fans", value: "fans"},
      {name: "is_liked", value: "is_liked"},
    ],
    workingFields: [],
  }
  ngOnInit(){
    this.tableData = this.formatTableData(this.data);
    this.cards = this.formatCardData(this.data)
  }

  formatTableData(data:any) {
    const columns = this.tablesData[this.dataType];
    let tablesData: any[][] = [];
    for(let i=0 ; i< data.length; i++){
      let rowData: any[] = [];
      columns.forEach((d)=>{
        rowData.push(data[i][d.value]);
      })
      tablesData.push(rowData);
    }
    return {columns,tablesData}
  }

  formatCardData(data:any) {
    const fields = this.cardsData[this.dataType];
    const result = [];
    if (fields && fields.length > 0)
    for(let i=0 ; i< data.length; i++){
      const cardData: any = {};
      fields.forEach((field) => {
        if (field.value){
          switch (field.value) {
            case "hours":
              cardData[field.name] = `${data[i][field.value]}h`
              break;
            case "prise":
              cardData[field.name] = `${data[i].competitive_prise}Jd/h - ${data[i].not_competitive_prise}Jd/h`
              break;
            default:
              cardData[field.name] = data[i][field.value]
              break;
          }
        }
      });
      result.push(cardData);
    }
    return result;
  }
}
