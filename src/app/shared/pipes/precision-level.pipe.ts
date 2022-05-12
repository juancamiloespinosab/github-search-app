import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'levelPrecision'
})
export class PrecisionLevelPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
