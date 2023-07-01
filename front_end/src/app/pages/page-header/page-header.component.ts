import { Component } from '@angular/core';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {
  rateDeTails = [
    {level: 1, number: 10},
    {level: 2, number: 20},
    {level: 3, number: 30},
    {level: 4, number: 40},
    {level: 5, number: 70},
  ];
}
