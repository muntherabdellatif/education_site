import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTableColumns, faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() isTable: boolean = true;
  @Output() isTableView = new EventEmitter<boolean>();

  faTableColumns = faTableColumns;
  faImage = faImage;

  toggleViewMode($event: Event) {
    const selectedItem = ($event.currentTarget as HTMLElement).id;
    if (selectedItem === 'table') {
      this.isTable = true;
      this.isTableView.emit(true);
    } else if (selectedItem === 'card') {
      this.isTable = false;
      this.isTableView.emit(false);
    }
  }
}
