import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reestructuras',
  templateUrl: './reestructuras.component.html',
  styleUrls: ['./reestructuras.component.scss']
})
export class ReestructurasComponent implements OnInit {

  show:boolean = false;

  esconder:boolean = false;
  esconderF:boolean = true;
  esconderT:boolean = false;
  showModal:boolean = false;


  constructor() { }

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

  modal(){
    console.log("Llego aqui");

  }

  mostrarContenido(){
    console.log("llego aqui");
    this.show = true;
  }

}
