import { Component } from '@angular/core';
import * as linksData from '../../data/links.json';
import * as majorsData from '../../data/majors.json';
import * as subjectsData from '../../data/subjects.json';
import * as universitiesData from '../../data/universities.json';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent {
  links = linksData;
  majors = majorsData;
  subjects = subjectsData;
  universities = universitiesData;

  linkTable: any;
  majorsTable: any;
  subjectsTable: any;
  universitiesTable: any;

  dataType: "links" | "majors" | "subjects" | "universities" | "workingFields"= "links";
  tableData = {
    links: ["name","source","major","subject" ],
    majors: ["name","university","hours","competitive_prise","not_competitive_prise","classification"],
    subjects: ["name","major","university","compulsory_or_optional","hours","prerequisite"],
    universities: ["name","location","government_or_private"],
    workingFields: [],
  }

  constructor(){
    this.linkTable = this.formatTableData(this.links);
    this.dataType = "majors";
    this.majorsTable = this.formatTableData(this.majors);
    this.dataType = "subjects";
    this.subjectsTable = this.formatTableData(this.subjects);
    this.dataType = "universities";
    this.universitiesTable = this.formatTableData(this.universities);
  }

  formatTableData(data:any){
    const columns = this.tableData[this.dataType];
    let tableData: any[][] = [];
    for(let i=0 ; i< data.length; i++){
      let rowData: any[] = [];
      columns.forEach((d)=>{
        rowData.push(data[i][d]);
      })
      tableData.push(rowData);
    }
    return {columns,tableData}
  }
}
