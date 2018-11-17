import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccSharedComponent } from './acc-shared.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AccSharedComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    AccSharedComponent,
    RouterModule
  ]
})
export class AccSharedModule { }
