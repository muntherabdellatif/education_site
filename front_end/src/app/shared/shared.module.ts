import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationPipe } from '../pipes/translation.pipe';
import { TextTrimPipe } from '../pipes/text-trim.pipe';
@NgModule({
  declarations: [
    TranslationPipe,
    TextTrimPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TranslationPipe,
    TextTrimPipe
  ]
})
export class SharedModule { }
