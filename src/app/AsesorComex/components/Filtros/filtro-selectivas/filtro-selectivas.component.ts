import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-selectivas',
  templateUrl: './filtro-selectivas.component.html',
  styleUrls: ['./filtro-selectivas.component.scss']
})
export class FiltroSelectivasComponent implements OnInit {

  public mostrarTablaSelectivas: boolean = false;


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
  mostrarTablasSelectivas() {
    // this.mostrarTablaAutomaticas = false;
    // this.mostrarTablaComextmec = false;
    // this.mostrarTablaPyme = false;
    this.mostrarTablaSelectivas = true;
    // this.mostrarTablaTmec = false;
    // this.mostrarTablaTurismo = false;
    // this.mostrarTablaReestructura = false;

  }
}
