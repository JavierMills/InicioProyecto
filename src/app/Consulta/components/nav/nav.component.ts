import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  fecha: Date = new Date();

  public Automaticas : string = 'Solicitudes Automaticas';
  public TMEC : string = 'Solicitudes T-MEC';
  public Hotelero : string = 'Solicitudes Hotelero';
  public Stock : string = 'Stock Bancomex';
  public Creditos_Gtias : string = 'Creditos con Garantia';


  constructor() {}

  mostrarSolicitudAutomatica: boolean = false;

  mostrarSolicitudTMEC: boolean = false;

  mostrarSolicitudHotelero: boolean = false;

  mostrarSolicitudStock: boolean = false;

  mostrarSolicitudGarantias: boolean = false;




  ngOnInit(): void {

  }

  mostrarAutomatica() {
    this.mostrarSolicitudAutomatica = true;
    this.mostrarSolicitudTMEC = false;
    this.mostrarSolicitudHotelero= false;
    this.mostrarSolicitudGarantias= false;
    this.mostrarSolicitudStock= false;

  }

  inicio() {
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudTMEC = false;
    this.mostrarSolicitudHotelero = false;
    this.mostrarSolicitudGarantias= false;
    this.mostrarSolicitudStock= false;
  }

  mostrarTMEC() {
    this.mostrarSolicitudTMEC = true;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudHotelero = false;
    this.mostrarSolicitudGarantias= false;
    this.mostrarSolicitudStock= false;

  }
  mostrarHotelero() {
    this.mostrarSolicitudHotelero = true;
    this.mostrarSolicitudTMEC = false;
    this.mostrarSolicitudAutomatica = false
    this.mostrarSolicitudGarantias= false;
    this.mostrarSolicitudStock= false;
;

  }
  mostrarStock() {
    this.mostrarSolicitudHotelero = false;
    this.mostrarSolicitudTMEC = false;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudGarantias= false;
    this.mostrarSolicitudStock= true;

  }
  mostrarCreditoGarantias() {
    this.mostrarSolicitudHotelero = false;
    this.mostrarSolicitudTMEC = false;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudGarantias= true;
    this.mostrarSolicitudStock= false;

  }
}
