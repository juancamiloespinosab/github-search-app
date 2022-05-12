import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatChipsModule,
    MatInputModule
  ],
  exports: [
    MatChipsModule,
    MatInputModule
  ]
})
export class MaterialModule { }
