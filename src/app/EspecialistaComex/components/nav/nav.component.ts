import { Component, OnInit } from '@angular/core';


interface tabla{
  value:string
};


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  show:boolean = false;

  public garantiaA : string = "Garantia Automatica"
  public garantiaS : string = "Garantia Selectiva"
  public contratoPYME : string = "Solicitud Contrato PYME"
  public garantiaCOMEXTMEC : string = "Garantia Comex TMEC"
  public garantiaT : string = "Garantia Turismo"
  public garantiaTMEC : string = "Garantia TMEC"



  llenatabla:tabla[] = [{value:'Capturar Solcitud'},
  {value:'Proceso Pendiente Asesor Comex'},
  {value:'Especialista Comex (Rechazos)'},
  {value:'Proceso Pendiente Contraloría'},
  {value:'Proceso Pendiente Cartera'},
  {value:'Fondos de Fomento'},
  {value:'Enviada a Nafinet'},
  {value:'Aprobado Nafinet'},
  {value:'Rechazado Nafinet'},
  {value:'Reproceso'},];

  fecha : Date = new Date();

  public Automaticas : string = 'Solicitudes Automaticas'
  public Selectivas : string = 'Solicitudes Selectivas'
  public TMEC : string = 'Solicitud TMEC'
  public Contrato_PYME : string = 'Solicitud Contrato Pyme'
  public Comex_TMEC : string = 'Solicitudes Comex-TMEC'
  public Turismo : string = 'Solicitudes Turismo'


  allUsers: any = [];
  constructor() { }
  esconder:boolean = false;
  esconderF:boolean = true;
  esconderT:boolean = false;
  showModal:boolean = false;
  reporte: boolean = false;
  ngOnInit(): void {


  this.esconder;
}

  mostrar(): void{
    this.esconder = true;
    this.esconderF = false;
  }

  mostrarTabla(){
    this.esconderT = true;
    console.log(this.esconderT)

  }

  modal(){
    console.log("Llego aqui");

  }

  mostrarContenido(){
    console.log("llego aqui");
    this.show = true;
  }

  mostrarForm(){
    this.showModal = true;
  }
  mostrarReportes(){
    this.reporte = true;
  }

}
