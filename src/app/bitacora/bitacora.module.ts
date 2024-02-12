import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BitacoraComponent } from './bitacora.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BitacoraComponent],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class BitacoraModule { }
