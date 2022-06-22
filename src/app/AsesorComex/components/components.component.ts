import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { table } from 'console';
import { Subject } from 'rxjs';

interface tabla{value:string};


@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {
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

  // dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject<any>();

  allUsers: any = [];


  constructor(private http: HttpClient) { }
  esconder:boolean = false;
  esconderF:boolean = true;
  esconderT:boolean = false;

  ngOnInit(): void {
  //   this.dtOptions = {
  //     pagingType: 'full_numbers',
  //     pageLength: 40
  // };

  // this.http.get("https://jsonplaceholder.typicode.com/users")
  //   .subscribe( resp => {
  //     this.allUsers = resp;
  //     this.dtTrigger.next(0);
  //   })

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

  // ngOnDestroy(): void {
  //   this.dtTrigger.unsubscribe();
  // }

}
