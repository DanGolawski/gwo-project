import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nullValue'
})
export class NullValuePipe implements PipeTransform {

  transform(value: string | number): string | number {
    return value ? value : '-'
  }

}
