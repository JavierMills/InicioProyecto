import { Component, OnInit } from '@angular/core';

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
