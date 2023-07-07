import { Component, Input } from '@angular/core';
import { RateDetail, RatePar } from '../interfaces';

@Component({
  selector: 'app-rate-details',
  templateUrl: './rate-details.component.html',
  styleUrls: ['./rate-details.component.scss']
})
export class RateDetailsComponent {
  @Input() rateDeTails: RateDetail[] | undefined;

  rate: RatePar[] | undefined;

  ngOnInit() {
    if (this.rateDeTails)
      this.rate = this.convertToPercent(this.rateDeTails);
  }

  convertToPercent(rateDeTails: RateDetail[]) {
    let sum = 0;
    let result: RatePar[] = []
    rateDeTails.forEach((rate: RateDetail) => {
      sum += rate.number;
    });


    rateDeTails.forEach((rate: RateDetail) => {
      const bar = {level: rate.level, percent: `${rate.number/sum *100}px`}
      result.push(bar);
    })
    return result;
  }
}
