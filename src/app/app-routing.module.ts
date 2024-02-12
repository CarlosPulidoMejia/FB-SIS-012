import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BitacoraComponent } from './bitacora/bitacora.component';
import { QuejasComponent } from './quejas/quejas.component';
import { mantCatalogosComponent } from './mantCatalogos/mantCatalogos.component';
import { TicketsComponent } from './tickets/tickets.component';


const routes: Routes = [
  { path: 'BitacoraRespuestas', component: BitacoraComponent, pathMatch: 'full'},
  { path: 'Tickets', component: TicketsComponent, pathMatch: 'full'},
  { path: 'Quejas', component:  QuejasComponent, pathMatch: 'full'},
  { path: 'MantenimientoCatalogos', component: mantCatalogosComponent },
  { path: '**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
