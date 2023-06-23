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
    links: ["name","source","major","subject"],
    majors: ["name","university","hours","competitive_prise","not_competitive_prise","classification"],
    subjects: ["name","major","university","compulsory_or_optional","hours","prerequisite"],
    universities: ["name","location","government_or_private"],
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
        rowData.push(data[i][d]);
      })
      tablesData.push(rowData);
    }
    return {columns,tablesData}
  }
}
