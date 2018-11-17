import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccSharedComponent } from './acc-shared.component';

@NgModule({
  declarations: [AccSharedComponent],
  imports: [
    CommonModule
  ],
  exports: [
    AccSharedComponent
  ]
})
export class AccSharedModule { }
