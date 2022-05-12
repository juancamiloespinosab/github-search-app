import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor(
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  show(name: string = 'grid-spinner') {   
    this.ngxSpinnerService.show(name);
  }

  hide(name: string = 'grid-spinner') {
    this.ngxSpinnerService.hide(name);
  }
}
