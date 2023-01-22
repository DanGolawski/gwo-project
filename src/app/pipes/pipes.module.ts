import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencySymbolPipe } from './currency-symbol.pipe';
import { NullValuePipe } from './null-value.pipe';



@NgModule({
  declarations: [
    CurrencySymbolPipe,
    NullValuePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencySymbolPipe,
    NullValuePipe
  ]
})
export class PipesModule { }
