import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from '../models/country';

@Pipe({
  name: 'currencySymbol'
})
export class CurrencySymbolPipe implements PipeTransform {

  transform(value: Currency): string {
    if (!value) {
      return '';
    }
    const currency: any = Object.values(value)[0];
    return currency.symbol ?? '-';
  }

}
