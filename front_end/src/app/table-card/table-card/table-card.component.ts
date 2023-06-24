import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent {
  @Input() data: any;
  @Input() dataType: "links" | "majors" | "subjects" | "universities" | "workingFields" = "links";

  tableData: any;

  tablesData = {
    links: [
      {name: "name" , value: "name"},
      {name: "source" , value: "source"},
      {name: "major" , value: "major"},
      {name: "subject" , value: "subject"},
    ],
    majors: [
      {name: "name" , value: "name"},
      {name: "university" , value: "university"},
      {name: "hours" , value: "hours"},
      {name: "competitive_prise" , value: "competitive_prise"},
      {name: "not_competitive_prise" , value: "not_competitive_prise"},
      {name: "classification" , value: "classification"},
    ],
    subjects: [
      {name: "name" , value: "name"},
      {name: "major" , value: "major"},
      {name: "university" , value: "university"},
      {name: "compulsory_or_optional" , value: "compulsory_or_optional"},
      {name: "hours" , value: "hours"},
      {name: "prerequisite" , value: "prerequisite"},
    ],
    universities: [
      {name: "name" , value: "name"},
      {name: "location" , value: "location"},
      {name: "government_or_private" , value: "government_or_private"},
    ],
    workingFields: [],
  }

  ngOnInit(){
    this.tableData = this.formatTableData(this.data);
  }

  formatTableData(data:any){
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
}
