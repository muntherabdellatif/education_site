import { Component } from '@angular/core';
import * as linksData from '../../data/links.json'
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  data = linksData;
}
