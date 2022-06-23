import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface tabla{
  value:string
};
interface solicitarCredito{
  credito:string
};

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

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

  public Automaticas : string = 'Solicitudes Automaticas'
  public Selectivas : string = 'Solicitudes Selectivas'
  public TMEC : string = 'Solicitud TMEC'
  public Contrato_PYME : string = 'Solicitud Contrato Pyme'
  public Comex_TMEC : string = 'Solicitudes Comex-TMEC'
  public Turismo : string = 'Solicitudes Turismo'


  allUsers: any = [];
  constructor(private http: HttpClient) { }
  esconder:boolean = false;
  esconderF:boolean = true;
  esconderT:boolean = false;

  ngOnInit(): void {


  this.esconder;
}

  mostrar(){
    this.esconder = true;
    this.esconderF = false;
  }

  mostrarTabla(){
    this.esconderT = true;
    console.log(this.esconderT)

  }

}
