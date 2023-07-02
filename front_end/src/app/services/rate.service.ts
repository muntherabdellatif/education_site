import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RateService {

  constructor() { }

  getRate(rateArray: number[]){
    const sum = this.getFans(rateArray);
    let productSum = 0;
    rateArray.forEach((rate: number, index)=> productSum += rate*(index + 1));
    return this.roundToSecondDigit(productSum/sum);
  }

  getFans(rateArray: number[]){
    let sum = 0;
    rateArray.forEach((rate: number)=> sum += rate)
    return sum;
  }

  roundToSecondDigit(number: number) {
    var rounded = Math.round(number * 100) / 100;
    return rounded;
  }
}
