import { Component, Input } from '@angular/core';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { CardRate, Star } from '../interfaces';

@Component({
  selector: 'app-card-rate',
  templateUrl: './card-rate.component.html',
  styleUrls: ['./card-rate.component.scss']
})
export class CardRateComponent {
  @Input() card: CardRate | undefined;
  @Input() disableHover?:boolean = false;
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;

  stars: Star[] = [];

  ngOnInit() {
    if (this.card) {
        let activeStarCount =  Math.floor(this.card.rate);
        let starHalfCount = (this.card.rate % activeStarCount) > 0.49 ? 1 : 0;
        let notActiveStarCount = 5 - activeStarCount - starHalfCount;
        for(let i = 0; i< 5 ; i++) {
          let star: Star = { class: 'active', icon: faStar};
          if (activeStarCount) {
            star = {icon: faStar, class: "active"};
            activeStarCount--;
          }
          else if (starHalfCount) {
            star = {icon: faStarHalfStroke, class: "active"};
            starHalfCount--;
          }
          else if (notActiveStarCount) {
            star = {icon: faStar, class: "not-active"};
            notActiveStarCount--;
          }
          if(this.disableHover)
            star.class += " disable-hover"
          this.stars.push(star);
        }
    }
  }
}
