import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  show:boolean = false;


  constructor() { }

  ngOnInit(): void {
  }

  mostrarContenido(){
    console.log("llego aqui");
    this.show = true;
  }
}
