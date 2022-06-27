import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-comex-tmec',
  templateUrl: './form-comex-tmec.component.html',
  styleUrls: ['./form-comex-tmec.component.scss']
})
export class FormComexTmecComponent implements OnInit {

  show:boolean = false;

  esconder:boolean = false;
  esconderF:boolean = true;
  esconderT:boolean = false;
  showModal:boolean = false;


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
