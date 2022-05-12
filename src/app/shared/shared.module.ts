import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { PrecisionLevelPipe } from './pipes/precision-level.pipe';
import { MaterialModule } from './material/material.module';

import { NgxSpinnerModule } from "ngx-spinner";



@NgModule({
  declarations: [
    PrecisionLevelPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  exports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ]
})
export class SharedModule { }
