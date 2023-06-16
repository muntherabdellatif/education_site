import { Component } from '@angular/core';
import { faMagnifyingGlass, faBurst, faUser, faMoon, faBell} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isToggleOn = false;
  faBurst = faBurst;
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faMoon = faMoon;
  faBell = faBell;

  toggleSearch() {
    this.isToggleOn= ! this.isToggleOn;
  }
}
