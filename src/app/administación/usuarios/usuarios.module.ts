import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuariosComponent } from "./usuarios.component"; 
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [UsuariosComponent],
  imports:[
    FormsModule,
    CommonModule
  ]
})
export class UsuariosModule {}