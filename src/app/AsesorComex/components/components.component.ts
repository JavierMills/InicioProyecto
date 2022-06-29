import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  public garantiaA: string = 'Garantia Automatica';
  public garantiaS: string = 'Garantia Selectiva';
  public contratoPYME: string = 'Solicitud Contrato PYME';
  public garantiaCOMEXTMEC: string = 'Garantia Comex TMEC';
  public garantiaT: string = 'Garantia Turismo';
  public garantiaTMEC: string = 'Garantia TMEC';

  //status de garantia

  public CapturarSolicitud: string = 'Capturar Solcitud';
  public ProcesoPendienteAsesorC: string = 'Proceso Pendiente Asesor Comex';
  public EspecialistaComexRech: string = 'Especialista Comex (Rechazos)';
  public ProcesoPendienteContraloria: string = 'Proceso Pendiente Contraloría';
  public FondosDeFomento: string = 'Fondos de Fomento';
  public EnviadaNafinet: string = 'Enviada a Nafinet';
  public AprobadoNafinet: string = 'Aprobado Nafinet';
  public RechaxoNafinet: string = 'Rechazo Nafinet';
  public Reproceso: string = 'Reproceso';

  // llenatabla:TablaInterface[] = [
  //   {value:'Capturar Solcitud'},
  // {value:'Proceso Pendiente Asesor Comex'},
  // {value:'Especialista Comex (Rechazos)'},
  // {value:'Proceso Pendiente Contraloría'},
  // {value:'Proceso Pendiente Cartera'},
  // {value:'Fondos de Fomento'},
  // {value:'Enviada a Nafinet'},
  // {value:'Aprobado Nafinet'},
  // {value:'Rechazado Nafinet'},
  // {value:'Reproceso'},];

  fecha: Date = new Date();

  public Automaticas: string = 'Solicitudes Automaticas';
  public Selectivas: string = 'Solicitudes Selectivas';
  public TMEC: string = 'Solicitud TMEC';
  public Contrato_PYME: string = 'Solicitud Contrato Pyme';
  public Comex_TMEC: string = 'Solicitudes Comex-TMEC';
  public Turismo: string = 'Solicitudes Turismo';
  public hora: string = '';

  allUsers: any = [];
  constructor(private http: HttpClient) {}
  esconder: boolean = false;
  esconderF: boolean = true;
  esconderT: boolean = false;

  mostrarSolicitudAutomatica: boolean = false;
  mostrarSolicitudAutomaticaF: boolean = true;

  mostrarSolicitudSelectiva: boolean = false;

  mostrarSolicitudComexTMEC: boolean = false;

  mostrarContratoPyme: boolean = false;

  mostrarSolicitudTMEC: boolean = false;

  mostrarSolicitudTurismo: boolean = false;

  ngOnInit(): void {
    this.esconder;
  }

  mostrar() {
    this.esconder = true;
    this.esconderF = false;
  }

  mostrarTabla() {
    this.esconderT = true;
    console.log(this.esconderT);
  }



  mostrarAutomatica() {
    this.mostrarSolicitudAutomatica =true;
    this.mostrarSolicitudAutomaticaF =false;
  }
  mostrarSelectiva() {
    this.mostrarSolicitudSelectiva = true;
    this.mostrarSolicitudAutomatica = false;
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
