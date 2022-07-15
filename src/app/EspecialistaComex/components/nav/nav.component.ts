import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { SteperService } from 'src/app/AsesorComex/components/steper/steper.service';

interface tabla {
  value: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  public garantiaA: string = 'Garantia Automatica';
  public garantiaS: string = 'Garantia Selectiva';
  public contratoPYME: string = 'Solicitud Contrato PYME';
  public garantiaCOMEXTMEC: string = 'Garantia Comex TMEC';
  public garantiaT: string = 'Garantia Turismo';
  public garantiaTMEC: string = 'Garantia TMEC';
  public res: string = 'Reestructura';

  //status de garantia
  fecha = new Date()
  public CapturarSolicitud: string = 'Capturar Solcitud';
  public ProcesoPendienteAsesorC: string = 'Proceso Pendiente Asesor Comex';
  public EspecialistaComexRech: string = 'Especialista Comex (Rechazos)';
  public ProcesoPendienteContraloria: string = 'Proceso Pendiente Contraloría';
  public ProcesoPendienteCartera: string = 'Proceso Pendiente Cartera';
  public FondosDeFomento: string = 'Fondos de Fomento';
  public EnviadaNafinet: string = 'Enviada a Nafinet';
  public AprobadoNafinet: string = 'Aprobado Nafinet';
  public RechaxoNafinet: string = 'Rechazo Nafinet';
  public Reproceso: string = 'Reproceso';


  public Automaticas: string = 'Solicitudes Automaticas';
  public Selectivas: string = 'Solicitudes Selectivas';
  public TMEC: string = 'Solicitud TMEC';
  public Contrato_PYME: string = 'Solicitud Contrato Pyme';
  public Comex_TMEC: string = 'Solicitudes Comex-TMEC';
  public Turismo: string = 'Solicitudes Turismo';
  public Reestructuras: string = 'Solicitudes Reestructuras';
  public hora: string = '';

  allUsers: any = [];
  constructor(private http: HttpClient, private steperService:SteperService) {}
  esconder: boolean = false;
  esconderF: boolean = true;
  mostrarNavbar: boolean = true;

  // Automaticas
  mostrarTablaAutomaticas: boolean = false;
  mostrarTablaComextmec: boolean = false;
  mostrarTablaPyme: boolean = false;
  mostrarTablaSelectivas: boolean = false;
  mostrarTablaTmec: boolean = false;
  mostrarTablaTurismo: boolean = false;
  mostrarTablaReestructura : boolean = false;

  //  reporte: boolean = false;
  reporte: boolean = false;



  mostrarSelectivas: boolean = false;

  mostrarSolicitudAutomatica: boolean = false;

  mostrarSolicitudSelectiva: boolean = false;

  mostrarSolicitudComexTMEC: boolean = false;

  mostrarContratoPyme: boolean = false;

  mostrarSolicitudTMEC: boolean = false;

  mostrarSolicitudTurismo: boolean = false;

  mostrarSolicitudReestructura : boolean = false;

  ngOnInit(): void {
    this.esconder;
  }

  mostrar() {
    this.esconder = true;
    this.esconderF = false;
  }

  mostrarTablasAutomaticas() {
    this.mostrarTablaAutomaticas = true;
    this.mostrarTablaComextmec = false;
    this.mostrarTablaPyme = false;
    this.mostrarTablaSelectivas = false;
    this.mostrarTablaTmec = false;
    this.mostrarTablaTurismo = false;
    this.mostrarTablaReestructura = false;

  }

  mostrarTablasSelectivas() {
    this.mostrarTablaAutomaticas = false;
    this.mostrarTablaComextmec = false;
    this.mostrarTablaPyme = false;
    this.mostrarTablaSelectivas = true;
    this.mostrarTablaTmec = false;
    this.mostrarTablaTurismo = false;
    this.mostrarTablaReestructura = false;

  }

  mostrarTablasContratoPyme() {
    this.mostrarTablaAutomaticas = false;
    this.mostrarTablaComextmec = false;
    this.mostrarTablaPyme = true;
    this.mostrarTablaSelectivas = false;
    this.mostrarTablaTmec = false;
    this.mostrarTablaTurismo = false;
    this.mostrarTablaReestructura = false;

  }

  mostrarTablasComexTmec() {
    this.mostrarTablaAutomaticas = false;
    this.mostrarTablaComextmec = true;
    this.mostrarTablaPyme = false;
    this.mostrarTablaSelectivas = false;
    this.mostrarTablaTmec = false;
    this.mostrarTablaTurismo = false;
    this.mostrarTablaReestructura = false;

  }

  mostrarTablasTurismo() {
    this.mostrarTablaAutomaticas = false;
    this.mostrarTablaComextmec = false;
    this.mostrarTablaPyme = false;
    this.mostrarTablaSelectivas = false;
    this.mostrarTablaTmec = false;
    this.mostrarTablaTurismo = true;
    this.mostrarTablaReestructura = false;

  }

  mostrarTablasTmec() {
    this.mostrarTablaAutomaticas = false;
    this.mostrarTablaComextmec = false;
    this.mostrarTablaPyme = false;
    this.mostrarTablaSelectivas = false;
    this.mostrarTablaTmec = true;
    this.mostrarTablaTurismo = false;
    this.mostrarTablaReestructura = false;

  }
  mostrarTablasReestructuras() {
    this.mostrarTablaAutomaticas = false;
    this.mostrarTablaComextmec = false;
    this.mostrarTablaPyme = false;
    this.mostrarTablaSelectivas = false;
    this.mostrarTablaTmec = true;
    this.mostrarTablaTurismo = false;
    this.mostrarTablaReestructura = true;
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

  mostrarSelectiva() {
    this.mostrarSolicitudSelectiva = true;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarContratoPyme = false;
    this.mostrarSolicitudComexTMEC = false;
    this.mostrarSolicitudTurismo = false;
    this.mostrarSolicitudTMEC = false;
    this.mostrarSolicitudReestructura= false;

  }

  mostrarComexTMEC() {
    this.mostrarSolicitudComexTMEC = true;
    this.mostrarContratoPyme = false;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudSelectiva = false;
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
    this.mostrarTablaAutomaticas = false;
    this.mostrarTablaComextmec = false;
    this.mostrarTablaPyme = false;
    this.mostrarTablaSelectivas = false;
    this.mostrarTablaTmec = false;
    this.mostrarTablaTurismo = false;
    this.mostrarSolicitudReestructura= false;
    this.mostrarTablaReestructura = false;
    this.reporte = false;



  }

  mostrarPYME() {
    this.mostrarContratoPyme = true;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudSelectiva = false;
    this.mostrarSolicitudComexTMEC = false;
    this.mostrarSolicitudTurismo = false;
    this.mostrarSolicitudTMEC = false;
    this.mostrarSolicitudReestructura= false;

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
  
  mostrarReestructuras() {
    this.mostrarSolicitudReestructura= true;
    this.mostrarSolicitudTurismo = false;
    this.mostrarSolicitudTMEC = false;
    this.mostrarContratoPyme = false;
    this.mostrarSolicitudAutomatica = false;
    this.mostrarSolicitudSelectiva = false;
    this.mostrarSolicitudComexTMEC = false;
  }

  mostrarReportes(){
    this.reporte = true;
  }

  setMenu(menu:string){
    this.steperService.setMenuOrigen(menu);
  }

  setPaso(paso:string){
    if (paso == "selectiva") {
      this.steperService.setMenuOrigen('Selectivas');
      this.steperService.setActive('paso1');
    }
    else{
      this.steperService.setMenuOrigen('');
      this.steperService.setActive(paso);
    }    
  }

}
