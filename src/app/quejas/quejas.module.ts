import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuejasComponent } from './quejas.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [QuejasComponent],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class QuejasModule { }
