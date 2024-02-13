import { Component, OnInit } from '@angular/core';
import { AppService } from '../app/servicios/app/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor( private AppService: AppService ) {    }
  
  clasetextoQuejas: string;
  clasetextoCatalogos: string;
  clasetextoTickets:string;
  clasetextoBitacora: string;
  clasetextoAdministracion: string;
  iniciarSesion:boolean;
  ocultar:boolean;

  ngOnInit() {
    this.clasetextoBitacora = 'nav-link negrita';
    this.clasetextoQuejas= 'nav-link';
    this.clasetextoCatalogos = 'nav-link';
    this.clasetextoTickets = 'nav-link';
    this.clasetextoAdministracion = 'nav-link';
    this.iniciarSesion = false;
    this.ocultar = true;
  }

  clickNavbar(){
    this.ocultar = false;
  }

  clickCatalogos(){
    this.clasetextoBitacora = 'nav-link'
    this.clasetextoTickets = 'nav-link'
    this.clasetextoQuejas = 'nav-link'
    this.clasetextoCatalogos = 'nav-link negrita';
    this.clasetextoAdministracion = 'nav-link';
  }

  clickTickets(){
    this.clasetextoBitacora = 'nav-link'
    this.clasetextoTickets = 'nav-link negrita'
    this.clasetextoQuejas = 'nav-link'
    this.clasetextoCatalogos = 'nav-link';
    this.clasetextoAdministracion = 'nav-link';
  }
  
  clickQuejas(){
    this.clasetextoBitacora = 'nav-link'
    this.clasetextoTickets = 'nav-link'
    this.clasetextoQuejas = 'nav-link negrita'
    this.clasetextoCatalogos = 'nav-link';
    this.clasetextoAdministracion = 'nav-link';
  }

  clickBitacora(){
    this.clasetextoBitacora = 'nav-link negrita'
    this.clasetextoTickets = 'nav-link'
    this.clasetextoQuejas = 'nav-link'
    this.clasetextoCatalogos = 'nav-link';
    this.clasetextoAdministracion = 'nav-link';
  }

  clickAdministracion(){
    this.clasetextoBitacora = 'nav-link'
    this.clasetextoTickets = 'nav-link'
    this.clasetextoQuejas = 'nav-link'
    this.clasetextoCatalogos = 'nav-link';
    this.clasetextoAdministracion = 'nav-link negrita';
  }

  IniciarSesion(){
    this.iniciarSesion = false;
  }

  cerrarSesion(){
    this.iniciarSesion = true;
  }
}
