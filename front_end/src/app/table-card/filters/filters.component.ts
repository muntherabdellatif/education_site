import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faTableColumns, faImage, faLocationDot, faAngleDown, faCircleCheck, faLaptop } from '@fortawesome/free-solid-svg-icons';
import { TranslationService } from 'src/app/services/translation.service';
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {
  @Input() isTable: boolean = true;
  @Input() dataType: "links" | "majors" | "subjects" | "universities" | "workingFields" = "links";
  @Output() isTableView = new EventEmitter<boolean>();

  constructor(private translation: TranslationService) {}

  gpaOptions = [
    {name: "all",          min: 0,  max: 100},
    {name: "95_and_above", min: 95, max: 100},
    {name: "90_to_95",     min: 90, max: 94},
    {name: "80_to_90",     min: 80, max: 89},
    {name: "70_to_80",     min: 70, max: 79},
    {name: "60_to_70",     min: 60, max: 69},
    {name: "less_than_60", min: 0,  max: 59}
  ];

  filtersData = {
    links: [
      {name: 'filters.links.major', icon: faCircleCheck, level: 1, options: []},
      {name: 'filters.links.subject', icon: faCircleCheck, level: 1, options: []},
      {name: "filters.links.type", icon: faAngleDown, level: 2,
        options: [
          {name: "filters.links.course_and_article", value: "course_and_article"},
          {name: "filters.links.course", value: "course"},
          {name: "filters.links.article", value: "article"}
        ]},
      {name: "filters.links.resource", icon: faLaptop, level: 2, options: []},
    ],
    majors: [
      {name: 'filters.majors.university', icon: faCircleCheck, level: 1, options: []},
      {name: 'filters.majors.field', icon: faAngleDown, level: 2, options: []},
      {name: "filters.majors.competitive_or_not", icon: faAngleDown, level: 2,
        options: [
          {name: "filters.majors.competitive_or_not", value: "competitive_or_not"},
          {name: "filters.majors.competitive", value: "competitive"},
          {name: "filters.majors.not_competitive", value: "not_competitive"}
      ]},
      {name: "filters.majors.GPA", icon: faAngleDown, level: 2,
        options: [
          {name: "filters.majors.all", value: "all"},
          {name: "filters.majors.95_and_above", value: "95_and_above"},
          {name: "filters.majors.90_to_95", value: "90_to_95"},
          {name: "filters.majors.80_to_90", value: "80_to_90"},
          {name: "filters.majors.70_to_80", value: "70_to_80"},
          {name: "filters.majors.60_to_70", value: "60_to_70"},
          {name: "filters.majors.less_than_60", value: "less_than_60"}
      ]},
    ],
    subjects: [
      {name: 'filters.subjects.university', icon: faCircleCheck, level: 1, options: []},
      {name: 'filters.subjects.major', icon: faCircleCheck, level: 1, options: []},
      {name: 'filters.subjects.lab_or_class', icon: faAngleDown, level: 2,
        options: [
          {name: "filters.subjects.lab_or_class", value: "lab_or_class"},
          {name: "filters.subjects.lab", value: "lab"},
          {name: "filters.subjects.class", value: "class"}
      ]},
      {name: 'filters.subjects.compulsory_or_optional', icon: faAngleDown, level: 2,
        options: [
          {name: "filters.subjects.compulsory_or_optional", value: "compulsory_or_optional"},
          {name: "filters.subjects.compulsory", value: "compulsory"},
          {name: "filters.subjects.optional", value: "optional"}
      ]},
    ],
    universities: [
      {name: "filters.universities.city", icon: faLocationDot, level: 1, options: []},
      {name: "filters.universities.government_or_private", icon: faAngleDown, level:1 ,
        options: [
          {name: "filters.universities.government_or_private", value: "government_or_private"},
          {name: "filters.universities.government", value: "government"},
          {name: "filters.universities.private", value: "private"}
      ]}
    ],
    workingFields: [],
  };

  filters: any;

  ngOnInit() {
    this.prepareFilters();
  }

  faTableColumns = faTableColumns;
  faImage = faImage;

  toggleViewMode($event: Event) {
    const selectedItem = ($event.currentTarget as HTMLElement).id;
    if (selectedItem === 'table') {
      this.isTable = true;
      this.isTableView.emit(true);
    } else if (selectedItem === 'card') {
      this.isTable = false;
      this.isTableView.emit(false);
    }
  }

  prepareFilters(){
    let level_one: any[] = [];
    let level_two: any[] = [];
    const filters = this.filtersData[this.dataType];
    if (!filters || !filters.length)
      return

    filters.forEach((filter: any) => {
      filter.selectedOption = filter.options.length ? this.translation.getTranslation(filter.options[0].name) : this.translation.getTranslation(filter.name);
      filter.showPopup = false;
      if(filter.level === 1)
        level_one.push(filter);
      else if (filter.level === 2)
        level_two.push(filter);
    });

    this.filters = [[...level_one], [...level_two]]
  }

  openOptionPopup($event: Event) {
    const selectedItem = ($event.currentTarget as HTMLElement);
    const filterName = selectedItem.id;
    const filterLevel = +(selectedItem.dataset['level'] as string);
    this.filters[filterLevel - 1].find((item: any) => item.name == filterName).showPopup = !this.filters[filterLevel - 1].find((item: any) => item.name == filterName).showPopup;
  }
}
