import { Component, OnInit } from '@angular/core';
import { SteperService } from 'src/app/AsesorComex/components/steper/steper.service';

@Component({
  selector: 'app-form-comex-tmec',
  templateUrl: './form-comex-tmec.component.html',
  styleUrls: ['./form-comex-tmec.component.scss']
})
export class FormComexTMECComponent implements OnInit {

  fecha: Date = new Date()
  show:boolean = false;
  alert:boolean = false;
  esconder:boolean = false;
  esconderF:boolean = true;
  esconderT:boolean = false;
  showModal:boolean = false;

  steper:any;

  constructor(private steperService:SteperService) {
    this.steper = this.steperService.setActive("paso1");
  }

  ngOnInit(): void {
    this.steperService.getMenuOrigen().subscribe((data) => {
      if (data === "Automaticas") {
        this.show = false;
      }
      else{
        this.show = true;
      }
      });
      
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

  closeAlert(){
    this.alert = false;
  }

  MostrarAlert(){
    this.steper = this.steperService.setActive("paso2");
    this.alert = true;
  }
}

