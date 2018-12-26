import { NgModule } from '@angular/core';
import { HightlightDirective } from './hightlight.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
      HightlightDirective
    ],
    imports: [
      CommonModule
    ],
    exports: [
      HightlightDirective
    ]
  })
  export class DirectivesModule { } 