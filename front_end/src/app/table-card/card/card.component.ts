import { Component, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { RateService } from 'src/app/services/rate.service';
import { Card } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() data: any;
  @Input() dataType: "links" | "majors" | "subjects" | "universities" | "workingFields" = "links";

  cardRoutes = {links: "/link", majors: "/major", subjects: "/subject", universities: "/university", workingFields: "/working-field"}
  currentCardRoute = this.cardRoutes["links"];

  faHeart = faHeart;

  cards: Card[] | undefined;

  cardsData = {
    links: [
      {name: "id", value: "id"},
      {name: "image", value: "image_link"},
      {name: "textTop", value: null},
      {name: "textBottom", value: null},
      {name: "title", value: "name"},
      {name: "subTitle", value: "source"},
      {name: "extraText", value: null},
      {name: "rate", value: "rate"},
      {name: "fans", value: "fans"},
      {name: "is_liked", value: "is_liked"},
    ],
    majors: [
      {name: "id", value: "id"},
      {name: "image", value: "image"},
      {name: "textTop", value: "hours"},
      {name: "textBottom", value: "prise"},
      {name: "title", value: "name"},
      {name: "subTitle", value: "university"},
      {name: "extraText", value: null},
      {name: "rate", value: "rate"},
      {name: "fans", value: "fans"},
      {name: "is_liked", value: "is_liked"},
    ],
    subjects: [
      {name: "id", value: "id"},
      {name: "image", value: "image"},
      {name: "textTop", value: "hours"},
      {name: "textBottom", value: null},
      {name: "title", value: "name"},
      {name: "subTitle", value: "university"},
      {name: "extraText", value: "major"},
      {name: "rate", value: "rate"},
      {name: "fans", value: "fans"},
      {name: "is_liked", value: "is_liked"},
    ],
    universities: [
      {name: "id", value: "id"},
      {name: "image", value: "image"},
      {name: "textTop", value: "government_or_private"},
      {name: "textBottom", value: null},
      {name: "title", value: "name"},
      {name: "subTitle", value: "location"},
      {name: "extraText", value: null},
      {name: "rate", value: "rate"},
      {name: "fans", value: "fans"},
      {name: "is_liked", value: "is_liked"},
    ],
    workingFields: [],
  }

  constructor(private rateService: RateService){}

  ngOnInit(){
    this.currentCardRoute = this.cardRoutes[this.dataType];
    this.cards = this.formatCardData(this.data)
  }

  formatCardData(data:any) {
    const fields = this.cardsData[this.dataType];
    const result = [];
    if (fields && fields.length > 0)
    for(let i=0 ; i< data.length; i++){
      const cardData: any = {};
      fields.forEach((field) => {
        if (field.value){
          switch (field.value) {
            case "hours":
              cardData[field.name] = `${data[i][field.value]}h`
              break;
            case "prise":
              cardData[field.name] = `${data[i].competitive_prise}Jd/h - ${data[i].not_competitive_prise}Jd/h`
              break;
            case "rate":
              cardData[field.name] = this.rateService.getRate(data[i].rate);
              break;
            case "fans":
              cardData[field.name] =  this.rateService.getFans(data[i].rate);
              break;
            default:
              cardData[field.name] = data[i][field.value]
              break;
          }
        }
      });
      result.push(cardData);
    }
    return result;
  }
}
