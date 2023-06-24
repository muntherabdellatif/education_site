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
    let result:any = null;
    if (this.currentLanguage == 'arabic')
      result = arabicFile;
    else if (this.currentLanguage == 'english')
      result = englishFile;
    pathArray.forEach(point => {
      result = result[point];
    })
    console.log("result :", result);
    return result;
  }

  setLanguage(language: 'arabic' | 'english') {
    this.currentLanguage = language;
  }

  getLanguage(){
    return this.currentLanguage
  }
}
