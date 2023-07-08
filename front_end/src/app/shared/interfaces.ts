import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Arrow {
  ref: string;
  href: string;
  path: string;
  is_dashed: boolean;
  color: string;
  dur: string;
  text: string;
  textTop: string;
  textLeft: string;
  style: string;
}

export interface Link {
  id: number;
  name: string;
  description: string;
  source: string;
  major: string;
  subject: string | null;
  image_link: string;
  type: string;
  rate: number[];
  is_liked: boolean;
}

export interface Major {
  id: number;
  name: string;
  description: string;
  university: string;
  image: string;
  rate: number[];
  is_liked: boolean;
  hours: number;
  competitive_gpa: number;
  not_competitive_gpa: number;
  competitive_prise: number;
  not_competitive_prise: number;
  classification: string;
}

export interface WorkingField {
  id: number,
  name: string,
  description: string,
  image_link: string,
  rate: number[],
  is_liked: boolean,
  related_to_field: number | null
}

export interface Subject {
  id: number;
  name: string;
  university: string;
  major: string;
  image: string;
  description: string;
  subjects: string[];
  compulsory_or_optional: string;
  hours: number;
  lab_or_lectures: string;
  prerequisite: number | null;
  rate: number[];
  is_liked: boolean;
}

export interface University {
  id: number;
  name: string;
  location: string;
  image: string;
  rate: number[];
  is_liked: boolean;
  government_or_private: string;
}

export interface CardRate {
  rate: number;
  fans: number;
}

export interface RateDetail {
  level: number,
  number: number
}

export interface RatePar {
  level: number,
  percent: string
}

export interface Card {
  id: string | null;
  image: string | null;
  textTop: string | null;
  textBottom: string | null;
  title: string | null;
  subTitle: string | null;
  extraText: string | null;
  rate: CardRate['rate'];
  fans: CardRate['fans'];
  is_liked: boolean;
}

export interface Star {
  icon: IconDefinition;
  class: string;
}


