import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TablaInterface } from '../interfaces/interface';


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {


  llenatabla:TablaInterface[] = [
    {value:'Capturar Solcitud'},
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
  public hora : string = ""

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
