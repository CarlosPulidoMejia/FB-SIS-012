import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectosBauComponent } from './proyectos/proyectos.component';
import { QuejasComponent } from './quejas/quejas.component';
import { mantCatalogosComponent } from './mantCatalogos/mantCatalogos.component';


const routes: Routes = [
  { path: 'Proyectos', component: ProyectosBauComponent, pathMatch: 'full'},
  { path: 'Quejas', component:  QuejasComponent, pathMatch: 'full'},
  { path: 'MantenimientoCatalogos', component: mantCatalogosComponent },
  { path: '**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
