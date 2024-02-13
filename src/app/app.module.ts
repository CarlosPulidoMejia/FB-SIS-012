import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MantCatalogosModule } from './mantCatalogos/mantCatalogos.module';
import { HttpClientModule } from '@angular/common/http';
import { QuejasModule } from './quejas/quejas.module';


import { UsuariosModule } from './administación/usuarios/usuarios.module'; 


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MantCatalogosModule,
    QuejasModule,
    UsuariosModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
