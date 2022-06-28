import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public CapturarSolicitud : string = "Capturar Solcitud"
  public ProcesoPendienteAsesorC : string = "Proceso Pendiente Asesor Comex"
  public EspecialistaComexRech : string = "Especialista Comex (Rechazos)"
  public ProcesoPendienteContraloria : string = "Proceso Pendiente Contraloría"
  public FondosDeFomento : string = "Fondos de Fomento"
  public EnviadaNafinet : string = "Enviada a Nafinet"
  public AprobadoNafinet : string = "Aprobado Nafinet"
  public RechaxoNafinet : string = "Rechazo Nafinet"
  public Reproceso : string = "Reproceso"

  show:boolean = false;

  esconder:boolean = false;
  esconderF:boolean = true;
  esconderT:boolean = false;
  showModal:boolean = false;

  mostrarSolicitudAutomatica: boolean = false;
  mostrarSolicitudSelectiva: boolean = false;
  mostrarSolicitudComexTMEC: boolean = false;
  mostrarContratoPyme: boolean = false;
  mostrarSolicitudTMEC: boolean = false;
  mostrarSolicitudTurismo: boolean = false;



  constructor() { }

  ngOnInit(): void {
    this.esconder;
  }

  mostrar(){
    this.esconder = true;
    this.esconderF = false;
  }

  mostrarTabla(){
    this.esconderT = true;
    console.log(this.esconderT)

  }

  modal(){
    console.log("Llego aqui");

  }

  mostrarContenido(){
    console.log("llego aqui");
    this.show = true;
  }
  mostrarAutomatica() {
    if (this.mostrarSolicitudAutomatica) {
      this.mostrarSolicitudAutomatica = true;
    } else {
      this.mostrarSolicitudAutomatica = true;
    }
  }

  mostrarSelectiva() {
    if (this.mostrarSolicitudSelectiva) {
      this.mostrarSolicitudSelectiva = false;
    } else {
      this.mostrarSolicitudSelectiva = true;
    }
  }
  mostrarComexTMEC() {
    this.mostrarSolicitudComexTMEC = true;
  }
  mostrarPYME() {
    this.mostrarContratoPyme = true;
  }
  mostrarTMEC() {
    this.mostrarSolicitudTMEC = true;
  }
  mostrarTurismo() {
    this.mostrarSolicitudTurismo = true;
  }
}
