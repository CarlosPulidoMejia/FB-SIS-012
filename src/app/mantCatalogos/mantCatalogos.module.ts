import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mantCatalogosComponent } from './mantCatalogos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [mantCatalogosComponent],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class ReportesModule { }
