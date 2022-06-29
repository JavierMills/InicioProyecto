import { HttpClient } from '@angular/common/http';
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
  mostrarNavbar: boolean = true;

// Automaticas
mostrarTabla: boolean = false;

//

  mostrarSelectivas: boolean = false;

  mostrarSolicitudAutomatica: boolean = false;

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

  mostrarTablas() {
    this.mostrarTabla = true;
    console.log('click');

  }




  mostrarAutomatica() {
    this.mostrarSolicitudAutomatica = true;
    this.mostrarSolicitudSelectiva = false;
    this.mostrarContratoPyme = false;
    this.mostrarSolicitudComexTMEC = false;
    this.mostrarSolicitudTurismo = false;
    this.mostrarSolicitudTMEC = false;

  }
  mostrarSelectiva() {
    this.mostrarSolicitudSelectiva = true;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarContratoPyme = false;
    this.mostrarSolicitudComexTMEC = false;
    this.mostrarSolicitudTurismo = false;
    this.mostrarSolicitudTMEC = false;

  }
  mostrarComexTMEC() {
    this.mostrarSolicitudComexTMEC = true;
    this.mostrarContratoPyme = false;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudSelectiva = false;
    this.mostrarSolicitudTurismo = false;
    this.mostrarSolicitudTMEC = false;

  }
  mostrarPYME() {
    this.mostrarContratoPyme = true;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudSelectiva = false;
    this.mostrarSolicitudComexTMEC = false;
    this.mostrarSolicitudTurismo = false;
    this.mostrarSolicitudTMEC = false;

  }
  mostrarTMEC() {
    this.mostrarSolicitudTMEC = true;
    this.mostrarContratoPyme = false;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudSelectiva = false;
    this.mostrarSolicitudComexTMEC = false;
    this.mostrarSolicitudTurismo = false;
  }
  mostrarTurismo() {
    this.mostrarSolicitudTurismo = true;
    this.mostrarSolicitudTMEC = false;
    this.mostrarContratoPyme = false;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudSelectiva = false;
    this.mostrarSolicitudComexTMEC = false;
  }
}
