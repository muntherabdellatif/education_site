import { Component, Input } from '@angular/core';
import { Arrow } from '../shared/interfaces';
@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss']
})
export class RoadComponent {
  @Input() arrows: Arrow[] | undefined;

  ngOnInit() {
    this.arrows = this.arrows ? this.arrows.map((arrow: Arrow) => {
      arrow.style = `color: ${arrow.color}; animation-delay: ${arrow.dur}; top: ${arrow.textTop}; left: ${arrow.textLeft}`
      return arrow;
    }) : undefined ;
  }
}
