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
  clasetextoTicket: string;
  clasetextoReporte: string;
  iniciarSesion:boolean;
  ocultar:boolean;

  ngOnInit() {
    window.location.href
    this.clasetextoProyectos = 'nav-link negrita';
    this.clasetextoTicket = 'nav-link';
    this.clasetextoReporte = 'nav-link';
    this.iniciarSesion = false;
    this.ocultar = true;
  }

  clickNavbar(){
    this.ocultar = false;
  }

  clickProyectos(){
    this.clasetextoProyectos = 'nav-link negrita'
    this.clasetextoReporte = 'nav-link';
    this.clasetextoTicket = 'nav-link';
  }

  clickReporteDC(){
    this.clasetextoProyectos = 'nav-link';
    this.clasetextoTicket = 'nav-link';
    this.clasetextoReporte = 'nav-link negrita'
  }

  clickTickets(){
    this.clasetextoProyectos = 'nav-link';
    this.clasetextoTicket = 'nav-link negrita'
    this.clasetextoReporte = 'nav-link';
  }
  
  IniciarSesion(){
    this.iniciarSesion = true;
  }

  cerrarSesion(){
    this.iniciarSesion = false;
  }
}
