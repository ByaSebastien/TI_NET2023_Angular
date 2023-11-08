import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToFahrenheitPipe } from './pipes/to-fahrenheit.pipe';
import { ConvertTempPipe } from './pipes/convert-temp.pipe';
import { ToTimePipe } from './pipes/to-time.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    ToFahrenheitPipe,
    ConvertTempPipe,
    ToTimePipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    ToFahrenheitPipe,
    ConvertTempPipe,
    ToTimePipe,
    HighlightDirective
  ]
})
export class SharedModule { }
