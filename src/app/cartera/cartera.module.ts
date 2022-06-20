import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarteraComponent } from './pages/cartera/cartera.component';



@NgModule({
  declarations: [
    CarteraComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CarteraComponent
  ]
})
export class CarteraModule { }
