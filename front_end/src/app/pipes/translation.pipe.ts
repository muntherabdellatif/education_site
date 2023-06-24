import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Pipe({
  name: 'translation'
})
export class TranslationPipe implements PipeTransform {

  constructor(private translation: TranslationService){}

  transform(value: string): unknown {
    return this.translation.getTranslation(value);
  }
}
