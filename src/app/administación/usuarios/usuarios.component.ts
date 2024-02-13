import { Component, OnInit } from '@angular/core';

declare const $: any;
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  ocultar: boolean;
  verUsuarios: boolean;
  verPerfiles: boolean;

  ngOnInit() {
    this.ocultar = true;  
    this.verUsuarios = true ;  
    this.verPerfiles = false;
  }
  showData() {
    return (this.ocultar = false);
  }

  hideData() {
    return (this.ocultar = true);
  }

  usuarios(){
    this.verPerfiles = false 
    this.verUsuarios= true
  }

  perfiles(){
    this.verPerfiles = true 
    this.verUsuarios= false
  }
}