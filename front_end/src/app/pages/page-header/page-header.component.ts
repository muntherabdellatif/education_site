import { Component, Input } from '@angular/core';
import { RateService } from 'src/app/services/rate.service';
import { faAngleDown, faEye, faBook } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  @Input() title: string = "";
  @Input() subTitle: string = "";
  @Input() description: string = "";
  @Input() rateArray: number[] = [0,0,0,0,0];
  @Input() readMore?: boolean = true;
  @Input() seeMore?: boolean = true;
  @Input() seeMoreText: string = "";
  @Input() hasReferences?: boolean = false;

  faEye = faEye;
  faAngleDown = faAngleDown;
  faBook = faBook;

  rate: number = 0;
  fans: number = 0;
  rateDeTails = [
    {level: 1, number: 0},
    {level: 2, number: 0},
    {level: 3, number: 0},
    {level: 4, number: 0},
    {level: 5, number: 0},
  ];

  constructor(private rateService: RateService){}

  ngOnInit() {
    this.rate = this.rateService.getRate(this.rateArray);
    this.fans = this.rateService.getFans(this.rateArray);
    this.rateArray.forEach((rate, index) => {
      this.rateDeTails[index].number = rate;
    })
  }

  readMoreHandler() {
  }

  seeMoreHandler() {
  }

  referencesHandler() {
  }
}
