import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  fecha: Date = new Date();
  mostrarSolicitudCredito : boolean = false;
  mostrarSolicitudGarantias : boolean = false;
  constructor(private http: HttpClient) {}
  ngOnInit(): void {

  }
  inicio(){
    this.mostrarSolicitudGarantias = false;
    this.mostrarSolicitudCredito = false;
  }

  mostrarGarantias() {
    this.mostrarSolicitudGarantias = true;
    this.mostrarSolicitudCredito = false;

  }

  mostrarCredito(){
    this.mostrarSolicitudCredito = true;
    this.mostrarSolicitudGarantias = false;

  }

}
