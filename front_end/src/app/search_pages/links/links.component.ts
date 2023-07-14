import { Component } from '@angular/core';
import { LinksService } from 'src/app/services/Api/links.service';
import { Link } from 'src/app/shared/interfaces';
@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.scss']
})
export class LinksComponent {
  data: Link[] = [];
  isLoading: boolean = true;

  constructor(private linksService: LinksService) {}

  ngOnInit() {
    this.linksService.getLinks().subscribe(data => {
      this.data = data;
      this.isLoading = false;
    });
  }
}
