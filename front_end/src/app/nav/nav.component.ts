import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { faMagnifyingGlass, faBurst, faUser, faMoon, faBell, faRightFromBracket, faRightToBracket, faSun, faPenToSquare, faGear} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() dataEvent = new EventEmitter<string>();
  @ViewChild('searchInput', { static: false }) searchInputRef: ElementRef | undefined;

  isOpenSearchBar = false;
  showUserPopup = false;
  isOpenSelectionOption = false;

  CurrentTheme: "theme-light" | "theme-dark" = "theme-light";
  searchOption = [
    {name: "الجامعات", value: "universities" },
    {name: "التخصصات", value: "majors" },
    {name: "المواد", value: "subjects" },
    {name: "مجالات العمل", value: "working-fields" },
    {name: "مصادر التعلم", value: "links" },
  ]
  selectedOption = this.searchOption[4];

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

  constructor(private router: Router){}

  toggleSearch() {
    this.isOpenSearchBar= ! this.isOpenSearchBar;
  }

  toggleUserPopup() {
    this.showUserPopup = ! this.showUserPopup;
  }

  toggleSearchOption() {
    this.isOpenSelectionOption = !this.isOpenSelectionOption;
  }

  selectOption($event : Event) {
    const selectedValue = ($event.target as HTMLElement)?.id;
    const selectedOption = this.searchOption.find((option)=> option.value == selectedValue);
    this.selectedOption = selectedOption ? selectedOption : this.selectedOption;
    this.isOpenSelectionOption = false;
  }

  openSearchPage($event : Event) {
    $event.preventDefault();
    let searchValue = '';
    if (this.searchInputRef)
      searchValue = this.searchInputRef.nativeElement.value;
    this.router.navigate([`/${this.selectedOption.value}`], { queryParams: { search_value: searchValue }});
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
