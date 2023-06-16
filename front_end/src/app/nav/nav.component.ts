import { Component, EventEmitter, Output } from '@angular/core';
import { faMagnifyingGlass, faBurst, faUser, faMoon, faBell, faRightFromBracket, faRightToBracket, faSun, faPenToSquare, faGear} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() dataEvent = new EventEmitter<string>();

  isToggleOn = false;
  showUserPopup = false;

  CurrentTheme: "theme-light" | "theme-dark" = "theme-light";

  isLogin = false; // todo take it from backend
  isAdmin = false; // todo take it from backend

  faGear = faGear;
  faPenToSquare = faPenToSquare;
  faRightToBracket = faRightToBracket;
  faRightFromBracket = faRightFromBracket;
  faBurst = faBurst;
  faMagnifyingGlass = faMagnifyingGlass;
  faUser = faUser;
  faSun = faSun;
  faMoon = faMoon;
  faBell = faBell;

  constructor(){}

  toggleSearch() {
    this.isToggleOn= ! this.isToggleOn;
  }

  toggleUserPopup() {
    this.showUserPopup = ! this.showUserPopup;
  }

  changeTheme() {
    if (this.CurrentTheme === "theme-dark") {
      this.CurrentTheme = "theme-light"
      this.dataEvent.emit("theme-light");
    } else {
      this.CurrentTheme = "theme-dark";
      this.dataEvent.emit("theme-dark");
    }
  }
}
