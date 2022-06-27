import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-selectivas',
  templateUrl: './form-selectivas.component.html',
  styleUrls: ['./form-selectivas.component.scss']
})
export class FormSelectivasComponent implements OnInit {

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