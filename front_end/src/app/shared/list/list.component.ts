import { Component, Input } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() data: string[] | undefined;
  @Input() title: string | undefined;
  hasData = false;
  faAngleDown = faAngleDown;

  ngOnInit() {
    this.hasData = this.data ? this.data.length > 0 : false;
  }
}
