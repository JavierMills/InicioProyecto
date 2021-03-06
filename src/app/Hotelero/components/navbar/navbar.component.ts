import { Component, OnInit } from '@angular/core';

interface tabla{
  value:string
};
interface solicitarCredito{
  credito:string
};

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  show:boolean = false;


  credito:solicitarCredito[]=[
    {credito: 'Garantia Automatica'},
    {credito: 'Garantia Selectiva'},
    {credito: 'Contrato PYME'},
    {credito: 'Garantia Comex TMEC'},
    {credito: 'Garantia Turismo'}
  ]



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

}
