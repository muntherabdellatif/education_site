import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { faMagnifyingGlass, faBurst, faUser, faMoon, faBell, faRightFromBracket, faRightToBracket, faSun, faPenToSquare, faGear, faLanguage} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Output() theme = new EventEmitter<string>();
  @Output() language = new EventEmitter<string>();

  @ViewChild('searchInput', { static: false }) searchInputRef: ElementRef | undefined;

  isOpenSearchBar = false;
  showUserPopup = false;
  showLanguagePopup = false;
  isOpenSelectionOption = false;

  currentTheme: "theme-light" | "theme-dark" = "theme-light";
  currentLanguage: 'arabic' | 'english' = 'arabic';

  searchOption = [
    {name: "nav.search_options.universities", value: "universities" },
    {name: "nav.search_options.majors", value: "majors" },
    {name: "nav.search_options.subjects", value: "subjects" },
    {name: "nav.search_options.working-fields", value: "working-fields" },
    {name: "nav.search_options.links", value: "links" },
  ];

  languageOption = [
    {name: 'nav.arabic', value: 'arabic'},
    {name: 'nav.english', value: 'english'}
  ];

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
  faLanguage = faLanguage;

  constructor(private router: Router, private location: Location){}

  ngOnInit() {
    const url = this.location.path();
    const link = url.substr(url.lastIndexOf('/') + 1).split("?")[0];
    const selectedOption = this.searchOption.find((option) => option.value == link);
    this.selectedOption = selectedOption ? selectedOption : this.selectedOption;
  }

  toggleSearch() {
    this.isOpenSearchBar= !this.isOpenSearchBar;
  }

  toggleUserPopup() {
    this.showUserPopup = !this.showUserPopup;
  }

  toggleLanguagePopup() {
    this.showLanguagePopup = !this.showLanguagePopup;
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

  selectLanguage($event : Event) {
    const selectedValue = ($event.currentTarget as HTMLElement)?.id;
    if (selectedValue === "arabic") {
      this.currentLanguage = "arabic"
      this.language.emit("arabic");
    } else {
      this.currentLanguage = "english";
      this.language.emit("english");
    }
    this.showLanguagePopup = false;
  }

  openSearchPage($event : Event) {
    $event.preventDefault();
    let searchValue = '';
    if (this.searchInputRef)
      searchValue = this.searchInputRef.nativeElement.value;
    this.router.navigate([`/${this.selectedOption.value}`], { queryParams: { search_value: searchValue }});
  }

  changeTheme() {
    if (this.currentTheme === "theme-dark") {
      this.currentTheme = "theme-light"
      this.theme.emit("theme-light");
    } else {
      this.currentTheme = "theme-dark";
      this.theme.emit("theme-dark");
    }
  }
}
