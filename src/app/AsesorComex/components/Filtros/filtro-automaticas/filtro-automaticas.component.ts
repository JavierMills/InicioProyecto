import { Component, OnInit } from '@angular/core';
import { SteperService } from '../../steper/steper.service';
import { TableService } from '../../table/table.service';

@Component({
  selector: 'app-filtro-automaticas',
  templateUrl: './filtro-automaticas.component.html',
  styleUrls: ['./filtro-automaticas.component.scss']
})
export class FiltroAutomaticasComponent implements OnInit {

  mostrarSolicitudAutomatica: boolean = false;

  mostrarTablaAutomaticas: boolean = false;


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
  

  pasoDEfault = "paso1";

  constructor(private steperService:SteperService, private tableService:TableService) {
    
  }
  ngOnInit(): void {
    this.steperService.setActive(this.pasoDEfault);
  }

  mostrarTablasAutomaticas() {
    this.tableService.setFiltroStatus(this.steperService.getDescripcion(this.pasoDEfault));
    this.mostrarTablaAutomaticas = true;
  }

  setPaso(paso:any){
    this.steperService.setActive(paso.target.value);    
  }
}
