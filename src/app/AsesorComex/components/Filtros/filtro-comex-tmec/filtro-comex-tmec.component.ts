import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-comex-tmec',
  templateUrl: './filtro-comex-tmec.component.html',
  styleUrls: ['./filtro-comex-tmec.component.scss']
})
export class FiltroComexTmecComponent implements OnInit {

  mostrarTablaComextmec: boolean = false;


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
  constructor() { }

  ngOnInit(): void {
  }
  mostrarTablasComexTmec() {
    // this.mostrarTablaAutomaticas = false;
    this.mostrarTablaComextmec = true;
    // this.mostrarTablaPyme = false;
    // this.mostrarTablaSelectivas = false;
    // this.mostrarTablaTmec = false;
    // this.mostrarTablaTurismo = false;
    // this.mostrarTablaReestructura = false;

  }
}
