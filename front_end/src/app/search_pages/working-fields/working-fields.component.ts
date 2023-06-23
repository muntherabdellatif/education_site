import { Component } from '@angular/core';
import * as workingFieldsData from '../../data/workingfields.json'
@Component({
  selector: 'app-working-fields',
  templateUrl: './working-fields.component.html',
  styleUrls: ['./working-fields.component.scss']
})
export class WorkingFieldsComponent {
  data =workingFieldsData;
}
