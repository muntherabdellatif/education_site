import { Injectable } from '@angular/core';
import * as arabicFile from '../translation/arabic.json';
import * as englishFile from '../translation/english.json';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  arabicFile = arabicFile;
  englishFile = englishFile;
  currentLanguage: 'arabic' | 'english'  = "arabic";
  constructor() { }

  getTranslation(path: string) {
    const pathArray = path.split('.');
    if (!pathArray.length)
      return
    let result:any = null;
    if (this.currentLanguage == 'arabic')
      result = arabicFile;
    else if (this.currentLanguage == 'english')
      result = englishFile;
    pathArray.forEach(point => {
      result = result[point];
    })
    return result ? result : path;
  }

  setLanguage(language: 'arabic' | 'english') {
    this.currentLanguage = language;
  }

  getLanguage() {
    return this.currentLanguage
  }

  getTitle(textArray: string[]) {
    if (this.currentLanguage == "arabic")
      return textArray.join("/");
    else
      return textArray.reverse().join("/");
  }
}
