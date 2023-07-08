import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss']
})
export class TableCardComponent {
  @Input() data: any;
  @Input() dataType: "links" | "majors" | "subjects" | "universities" | "workingFields" = "links";
  @Input() hasLevelOneFilter? = true;
  @Input() title? = '';
  isTable = false;

  changeView(data : boolean) {
    this.isTable = data;
  }
}
