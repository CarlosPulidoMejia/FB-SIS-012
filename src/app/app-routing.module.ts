import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdaComponent } from './cda/cda.component';
import { ProyectosBauComponent } from './proyectos/proyectos.component';
import { TicketsComponent } from './tickets/tickets.component';
import { mantCatalogosComponent } from './mantCatalogos/mantCatalogos.component';


const routes: Routes = [
  { path: 'Proyectos', component: ProyectosBauComponent, pathMatch: 'full'},
  { path: 'Tickets', component:  TicketsComponent, pathMatch: 'full'},
  { path: 'MantenimientoCatalogos', component: mantCatalogosComponent },
  { path: '**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
