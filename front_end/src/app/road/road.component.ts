import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-road',
  templateUrl: './road.component.html',
  styleUrls: ['./road.component.scss']
})
export class RoadComponent {
  @Input() arrows: any;

  ngOnInit() {
    this.arrows = this.arrows.map((arrow: any) => {
      arrow.style = `color: ${arrow.color}; animation-delay: ${arrow.dur}; top: ${arrow.textTop}; left: ${arrow.textLeft}`
      return arrow;
    })
  }
}
