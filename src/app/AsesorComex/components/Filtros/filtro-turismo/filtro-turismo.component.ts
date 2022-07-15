import { Component, OnInit } from '@angular/core';
import { SteperService } from '../../steper/steper.service';

@Component({
  selector: 'app-filtro-turismo',
  templateUrl: './filtro-turismo.component.html',
  styleUrls: ['./filtro-turismo.component.scss']
})
export class FiltroTurismoComponent implements OnInit {

  public mostrarTablaTurismo : boolean =false;


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

  constructor(private steperService:SteperService) { }

  ngOnInit(): void {
    this.steperService.setActive(this.pasoDEfault);
  }
  
  mostrarTablasTurismo() {
    this.mostrarTablaTurismo = true;
  }

  setPaso(paso:any){
    this.steperService.setActive(paso.target.value);    
  }

}
