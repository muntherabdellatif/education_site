import { Component, Input } from '@angular/core';
import { faStar, faStarHalfStroke, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() cards: any;
    faStar = faStar;
    faStarHalfStroke = faStarHalfStroke;
    faHeart = faHeart;
}
