import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTrim'
})
export class TextTrimPipe implements PipeTransform {

 transform(value: string, maxLength: number): string {
    if (value.length <= maxLength) {
      return value;
    }

    const trimmedValue = value.substr(0, maxLength);
    return trimmedValue + '...';
  }

}
