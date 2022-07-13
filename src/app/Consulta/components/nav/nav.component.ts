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


  //

  mostrarSelectivas: boolean = false;

  mostrarSolicitudAutomatica: boolean = false;

  mostrarSolicitudSelectiva: boolean = false;

  mostrarSolicitudComexTMEC: boolean = false;

  mostrarContratoPyme: boolean = false;

  mostrarSolicitudTMEC: boolean = false;

  mostrarSolicitudTurismo: boolean = false;

  mostrarSolicitudReestructura : boolean = false;

  ngOnInit(): void {

  }

  mostrarAutomatica() {
    this.mostrarSolicitudAutomatica = true;
    this.mostrarSolicitudSelectiva = false;
    this.mostrarContratoPyme = false;
    this.mostrarSolicitudComexTMEC = false;
    this.mostrarSolicitudTurismo = false;
    this.mostrarSolicitudTMEC = false;
    this.mostrarSolicitudReestructura= false;

  }

  inicio() {
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudSelectiva = false;
    this.mostrarContratoPyme = false;
    this.mostrarSolicitudComexTMEC = false;
    this.mostrarSolicitudTMEC = false;
    this.mostrarSolicitudTurismo = false;



  }

  mostrarTMEC() {
    this.mostrarSolicitudTMEC = true;
    this.mostrarContratoPyme = false;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudSelectiva = false;
    this.mostrarSolicitudComexTMEC = false;
    this.mostrarSolicitudTurismo = false;
    this.mostrarSolicitudReestructura= false;

  }
  mostrarTurismo() {
    this.mostrarSolicitudTurismo = true;
    this.mostrarSolicitudTMEC = false;
    this.mostrarContratoPyme = false;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudSelectiva = false;
    this.mostrarSolicitudComexTMEC = false;
    this.mostrarSolicitudReestructura= false;

  }
}
