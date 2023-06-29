import { Component, Input } from '@angular/core';
import { faTableColumns, faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() isTable: boolean = true;

  faTableColumns = faTableColumns;
  faImage = faImage;
}
