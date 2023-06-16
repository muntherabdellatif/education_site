import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front_end';
  activeTheme: 'theme-light' | 'theme-dark' = 'theme-light';

  receiveData(data: string) {
    if (data == 'theme-light' || data == 'theme-dark')
      this.activeTheme = data;
  }

  arrows: any = [
  {
    ref: "Path-1",
    href: "#Path-1",
    path: 'm 500 0 v 160 a 100 100 0 0 0 100 100 h 230 a 100 100 0 0 1 100 100 v 150',
    is_dashed: true,
    color: "red",
    dur: "2.5s",
    text: "option 1",
    textTop: "513px",
    textLeft: "907px",
    style: "",
  },
  {
    ref: "Path-2",
    href: "#Path-2",
    path: 'm 500 0 v 510',
    is_dashed: false,
    color: "green",
    dur: "1.5s",
    text: "option 2",
    textTop: "513px",
    textLeft: "478px",
    style: "",
  },
  {
    ref: "Path-3",
    href: "#Path-3",
    path: 'm 500 0 v 160 a 100 100 0 0 1 -100 100 h -230 a 100 100 0 0 0 -100 100 v 150',
    is_dashed: true,
    color: "blue",
    dur: "2.5s",
    text: "option 3",
    textTop: "513px",
    textLeft: "47px",
    style: "",
  }]
}
