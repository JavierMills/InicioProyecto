import { Component, OnInit } from '@angular/core';
import { SteperService } from '../../steper/steper.service';

@Component({
  selector: 'app-filtro-selectivas',
  templateUrl: './filtro-selectivas.component.html',
  styleUrls: ['./filtro-selectivas.component.scss']
})
export class FiltroSelectivasComponent implements OnInit {

  public mostrarTablaSelectivas: boolean = false;


  public CapturarSolicitud: string = 'Capturar Solcitud';
  public NegocioInternacional: string = 'Negocio Internacional'
  public EnvBancomext: string = 'Enviado Bancomext'
  public EspecialistaComex: string = 'Especialista Comex (Rechazo Docs)'
  public Observaciones: string = 'Observaciones'
  public Formalizacion: string = 'Formalizacion Bancomext'
  public FormalizacionEspecialista: string = 'Formalizacion Especialista'
  public PPAsesor: string = 'Proceso Pendiente Asesor Comex'
  public RechazoEspecialista: string = 'Rechazo Especialista Comex'
  public PPContraliria: string = 'Proceso Pendiente Contraloria'
  public PPCartera: string = 'Proceso Pendiente Cartera'
  public FF: string = 'Fondos de Fomento'
  public Resumen: string = 'Resumen'

  pasoDEfault = "paso1";

  constructor(private steperService:SteperService) { }

  ngOnInit(): void {
    this.steperService.setActive(this.pasoDEfault);
  }
  mostrarTablasSelectivas() {
    this.mostrarTablaSelectivas = true;
  }

  setPaso(paso:any){
    this.steperService.setActive(paso.target.value);    
  }


}
