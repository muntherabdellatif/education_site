import { Pipe, PipeTransform } from '@angular/core';
import { franc } from 'franc';

@Pipe({
  name: 'textTrim'
})
export class TextTrimPipe implements PipeTransform {

 transform(value: string, maxLength: number): string {
    if (value.length <= maxLength) {
      return value;
    }
    const languageCode = franc(value);
    console.log("languageCode :", languageCode);
    const trimmedValue = value.substr(0, maxLength);
    if (languageCode == 'arb')
      return '...' + trimmedValue ;
    else
      return trimmedValue + '...';
  }

}
