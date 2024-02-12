import { Component, OnInit } from '@angular/core';
import { Base } from '../clases/baseDatos/base';
import { ContingenciaService } from '../servicios/contingencia/contingencia.service';
import { DatosService } from '../servicios/datos/datos.service';
import Swal from 'sweetalert2';
import { map, Observable, zip } from 'rxjs';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { MatrizcuentasService } from '../servicios/matrizcuentas/matrizcuentas.service';
import { PagosService } from '../servicios/pagos/pagos.service';
import { TipoPago } from '../clases/pagos/Pagos';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ContingenciaData } from '../clases/contingencia/contingencia';
import { MatrizCuentas } from '../clases/contingencia/matrizCuentas';
import { DetalleMatriz } from '../clases/contingencia/detalle';
import { HttpClient } from '@angular/common/http';
import { DatosContingencia } from '../clases/contingencia/datosContingencia';

declare const $: any;

@Component({
  selector: 'app-mantenimientoCatalogos',
  templateUrl: 'mantCatalogos.component.html',
  styleUrls: ['mantCatalogos.component.css']
})
export class mantCatalogosComponent implements OnInit {
  ngOnInit() {
  }
}




