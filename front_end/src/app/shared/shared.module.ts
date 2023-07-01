import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationPipe } from '../pipes/translation.pipe';
import { TextTrimPipe } from '../pipes/text-trim.pipe';
import { CardRateComponent } from './card-rate/card-rate.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RateDetailsComponent } from './rate-details/rate-details.component';
@NgModule({
  declarations: [
    TranslationPipe,
    TextTrimPipe,
    CardRateComponent,
    RateDetailsComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    TranslationPipe,
    TextTrimPipe,
    CardRateComponent,
    RateDetailsComponent
  ]
})
export class SharedModule { }
