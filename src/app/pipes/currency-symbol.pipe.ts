import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencySymbol'
})
export class CurrencySymbolPipe implements PipeTransform {

  transform(value: any): string {
    const currency: any = Object.values(value)[0];
    return currency.symbol ?? '-';
  }

}
