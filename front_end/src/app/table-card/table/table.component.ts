import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() data: any;
  @Input() dataType: "links" | "majors" | "subjects" | "universities" | "workingFields" | "skills"= "links";

  tableRoutes = {links: "/link", majors: "/major", subjects: "/subject", universities: "/university", workingFields: "/working-field", skills: "/skill"}
  currentTableRoute = this.tableRoutes["links"];

  table: any;
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
    skills: [
      {name: "tables.skills.name" , value: "name"},
      {name: "tables.skills.compulsory_or_optional" , value: "compulsory_or_optional"},
      {name: "tables.skills.prerequisite" , value: "prerequisite"},
    ]
  }

  ngOnInit(){
    this.currentTableRoute = this.tableRoutes[this.dataType];
    this.table = this.formatTableData(this.data);
  }

  formatTableData(data:any) {
    const columns = this.tablesData[this.dataType];
    let tablesData: any = [];
    for(let i=0 ; i< data.length; i++){
      let rowData: any[] = [];
      let rowId = 0;
      columns.forEach((d)=>{
        rowData.push(data[i][d.value]);
      })
      rowId = data[i].id;
      tablesData.push({rowData: rowData, rowId: rowId});
    }
    return {columns,tablesData}
  }
}
