import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelPrecisionPipe } from './pipes/level-precision.pipe';



@NgModule({
  declarations: [
    LevelPrecisionPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
