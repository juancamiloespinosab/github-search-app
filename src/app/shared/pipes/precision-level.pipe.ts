import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'precision'
})
export class PrecisionLevelPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {

    if (value < 0.4) return 'Low';
    if (value < 0.7) return 'Medium';
    return 'High';
  }

}
