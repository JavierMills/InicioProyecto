import { Component, OnInit } from '@angular/core';
import { SteperService } from '../../steper/steper.service';

@Component({
  selector: 'app-filtro-tmec',
  templateUrl: './filtro-tmec.component.html',
  styleUrls: ['./filtro-tmec.component.scss']
})
export class FiltroTMECComponent implements OnInit {

  mostrarTablaTmec: boolean = false;


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

  mostrarTablasTmec() {
    this.mostrarTablaTmec = true;
  }

  constructor(private steperService:SteperService) { }

  ngOnInit(): void {
    this.steperService.setActive(this.pasoDEfault);
  }

  setPaso(paso:any){
    this.steperService.setActive(paso.target.value);    
  }

}
