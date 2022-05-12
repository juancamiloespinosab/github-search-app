import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrecisionLevelPipe } from './pipes/precision-level.pipe';
import { MaterialModule } from './material/material.module';



@NgModule({
  declarations: [
    PrecisionLevelPipe
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
