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
  iniciarSesion:boolean;
  ocultar:boolean;

  ngOnInit() {
    this.clasetextoProyectos = 'nav-link negrita';
    this.clasetextoQuejas= 'nav-link';
    this.clasetextoCatalogos = 'nav-link';
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
  }

  clickCatalogos(){
    this.clasetextoProyectos = 'nav-link';
    this.clasetextoQuejas = 'nav-link';
    this.clasetextoCatalogos = 'nav-link negrita'
  }

  clickTickets(){
    this.clasetextoProyectos = 'nav-link';
    this.clasetextoQuejas = 'nav-link negrita'
    this.clasetextoCatalogos = 'nav-link';
  }
  
  IniciarSesion(){
    this.iniciarSesion = true;
  }

  cerrarSesion(){
    this.iniciarSesion = false;
  }
}
