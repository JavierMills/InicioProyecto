import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtro-contro-pyme',
  templateUrl: './filtro-contro-pyme.component.html',
  styleUrls: ['./filtro-contro-pyme.component.scss']
})
export class FiltroControPymeComponent implements OnInit {


  public mostrarTablaPyme : boolean = false;

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

  mostrarTablasContratoPyme() {
    this.mostrarTablaPyme = true;
  }

}
