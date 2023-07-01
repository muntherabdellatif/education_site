import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rate-details',
  templateUrl: './rate-details.component.html',
  styleUrls: ['./rate-details.component.scss']
})
export class RateDetailsComponent {
  @Input() rateDeTails: any = [];

  rate: any[] | undefined;

  ngOnInit() {
    this.rate = this.convertToPercent(this.rateDeTails);
  }

  convertToPercent(rateDeTails: any): any[]{
    let sum = 0;
    let result: any[] = []
    rateDeTails.forEach((rate: any) => {
      sum += rate.number;
    });


    rateDeTails.forEach((rate: any) => {
      const bar = {level: rate.level, percent: `${rate.number/sum *100}px`}
      result.push(bar);
    })
    return result;
  }
}
