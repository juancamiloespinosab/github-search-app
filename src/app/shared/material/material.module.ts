import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatChipsModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    MatTooltipModule
  ],
  exports: [
    MatChipsModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    MatTooltipModule
  ]
})
export class MaterialModule { }
