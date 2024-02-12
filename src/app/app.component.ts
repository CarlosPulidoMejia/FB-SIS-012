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
  
  clasetextoProyectos: string;
  clasetextoQuejas: string;
  clasetextoCatalogos: string;
  clasetextoTickets:string;
  clasetextoBitacora: string;
  iniciarSesion:boolean;
  ocultar:boolean;

  ngOnInit() {
    this.clasetextoBitacora = 'nav-link negrita';
    this.clasetextoQuejas= 'nav-link';
    this.clasetextoCatalogos = 'nav-link';
    this.clasetextoTickets = 'nav-link';
    this.iniciarSesion = false;
    this.ocultar = true;
  }

  clickNavbar(){
    this.ocultar = false;
  }

  clickProyectos(){
    this.clasetextoProyectos = 'nav-link negrita'
    this.clasetextoCatalogos = 'nav-link';
    this.clasetextoQuejas = 'nav-link';
    this.clasetextoTickets = 'nav-link'
  }

  clickCatalogos(){
    this.clasetextoBitacora = 'nav-link'
    this.clasetextoTickets = 'nav-link'
    this.clasetextoQuejas = 'nav-link'
    this.clasetextoCatalogos = 'nav-link negrita';
  }

  clickTickets(){
    this.clasetextoBitacora = 'nav-link'
    this.clasetextoTickets = 'nav-link negrita'
    this.clasetextoQuejas = 'nav-link'
    this.clasetextoCatalogos = 'nav-link';
  }
  
  clickQuejas(){
    this.clasetextoBitacora = 'nav-link'
    this.clasetextoTickets = 'nav-link'
    this.clasetextoQuejas = 'nav-link negrita'
    this.clasetextoCatalogos = 'nav-link';
  }

  clickBitacora(){
    this.clasetextoBitacora = 'nav-link negrita'
    this.clasetextoTickets = 'nav-link'
    this.clasetextoQuejas = 'nav-link'
    this.clasetextoCatalogos = 'nav-link';
  }

  IniciarSesion(){
    this.iniciarSesion = false;
  }

  cerrarSesion(){
    this.iniciarSesion = true;
  }
}
