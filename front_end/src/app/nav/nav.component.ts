import { Component } from '@angular/core';
import { faMagnifyingGlass, faBurst, faUser, faMoon, faBell, faRightFromBracket, faRightToBracket, faAddressCard, faPenToSquare, faGear} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  isToggleOn = false;
  showUserPopup = false;

  isLogin = false; // todo take it from backend
  isAdmin = false; // todo take it from backend

  faGear = faGear;
  faPenToSquare = faPenToSquare;
  faRightToBracket = faRightToBracket;
  faRightFromBracket = faRightFromBracket;
  faBurst = faBurst;
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faMoon = faMoon;
  faBell = faBell;

  toggleSearch() {
    this.isToggleOn= ! this.isToggleOn;
  }

  toggleUserPopup() {
    this.showUserPopup = ! this.showUserPopup;
  }
}
