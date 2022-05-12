import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  randomNumberFromInterval(min: number, max: number): number {
    return this.truncOneDecimal(Math.random() * (max - min + 0.1) + min)
  }

  truncOneDecimal(n: any): number {
    let t = n.toString();
    let regex = /(\d*.\d{0,1})/;
    return +t.match(regex)[0];
  }
}
